/**
httpEntry 的 父亲类
*/
import http from 'http'
import https from 'https'
import HttpEntryOpt from './opt/HttpEntryOpt'
import IParser from '../inf/IParser'


export default class BaseHttpEntry{
    protected _opt:HttpEntryOpt;
    protected _processors:Array<IParser<any,any>>;
    //返回默认的属性
    protected _getDefOpt():HttpEntryOpt {
        return null

    }
    protected _addDefOpt(opt:HttpEntryOpt):HttpEntryOpt {
        var defOpt = this._getDefOpt()
        if (defOpt) {
            for (var e in defOpt) {
                if (opt[e] == null) {
                    opt[e] = defOpt[e]
                }
            }
        }
        return opt
    }

    protected _isHttps() {
        var opt = this._opt
        return opt.https
    }
    protected _isGet() {
        var opt = this._opt
        return opt.method.toUpperCase() == 'GET'
    }
    protected buildUrl(map:any):string {
        var opt = this._opt
        var url = opt.prefix;
        var urlParam = map
        if (url == null) url = ''
        if (opt.path) url = url + opt.path
        if(map._url)
            return map._url;
        var urlParser = opt.urlParser
        if (urlParser != null) {
            var params = urlParser.parse(map);
            if(params != null && params != ''){
                if (url.indexOf('?') == -1) {
                    url = url + '?' + params
                } else {
                    url = url + '&' + params
                }
            }
        }
        return url
    }

    protected _buildDefHeader(param:any):any{
        var opt = this._opt;
        var bodyParser = opt.bodyParser;
        var ret = null;
        if(bodyParser != null)
            ret = bodyParser.builderHeader(param);
        if(ret == null)
            ret = {};
        return ret;
    }
    /**
     * 产生一个options给http调用
     * @param param 
     */
    protected _parseOption(param:any):any {
        var opt = this._opt
        var headers = this._buildDefHeader(param);
        let options = {
            hostname: opt.ip,
            port: opt.port,
            path: this.buildUrl(param),
            method: opt.method,
            headers:headers,
            rejectUnauthorized:null
        }
        let tempHeader = opt.headers
        for (const key in tempHeader) {
            
            headers[key] = tempHeader[key];
           
        }
        if (this._isHttps()) {
            headers.rejectUnauthorized = false
        }
        options.headers = this._processHead(headers,param)
        
        return options
    }
    protected _processHead(headers:any,param:any) {
        var opt = this._opt;
        var processors = opt.headerProcessors;
        if (processors && processors.length > 0) {
            
            for (var i = 0; i < processors.length; i++) {
                
                var ret = processors[i].parse(param)
                if(ret ){
                    for(var e in ret){
                        
                        headers[e] = ret[e]
                    }
                }
                
            }
        }
        return headers
    }
    /**
     * 
     * @param options 提交请求
     * @param param 
     */
    protected doRequest(options, param) {
        
        var client = this._acqClient()
        var self = this
        var promise = new Promise(function(resolve, reject) {
            var req = client.request(options, function(res) {
                var status = res.statusCode
                var chunks = [],
                    length = 0
                res.on('data', chunk => {
                    length += chunk.length
                    chunks.push(chunk)
                })
                res.on('end', () => {
                    var buffer = Buffer.alloc(length)
                    for (var i = 0, pos = 0, size = chunks.length; i < size; i++) {
                        chunks[i].copy(buffer, pos)
                        pos += chunks[i].length
                    }
                    resolve({
                        status,
                        result:buffer.toString('utf-8')
                    });
                })
            })
            req.on('error', function(e) {
                reject(e)
            })
            req.setTimeout(60 * 1000, function() {
                resolve({status:300})
            })
            self.writeParam(req, param)
            req.end()
        })

        return promise
    }

    async submit(param:any){
        var result = await this.request(param);
        return result.result;
    }

    protected _acqClient() {
        if (this._isHttps()) {
            return https
        }
        return http
    }

    writeParam(req, param):void {
        var opt = this._opt;
        var parser = opt.bodyParser;
        if(parser != null){
            var str = parser.parse(param);
            if(str != null){
                req.write(str);
            }
        }
    }

    /**
    可以一个参数 submit ('aaa',123)
    也可以多个参数
    */
    async request(param:any) {
        
        var options = this._parseOption(param)
        var ret = null
        try {
            ret = await this.doRequest(options, param)
        } catch (e) {
            console.log('options',options,param)
            console.log(e)
        }

        return {
            status:ret?.status || 500,
            result:this.parseResult(ret?.result)
        }
    } 

  

    parseResult(data):any {
        if (data == null) return null
        var opt = this._opt
        var resultParser = opt.resultParser;
        try{
            if(resultParser != null)
                return resultParser.parse(data);
        }catch(e){
            //console.log('baseHttpData',data);
            
        }
        return data;
    }
    setServer(opt:HttpEntryOpt):void {
        if (opt == null) opt = {}
        opt = this._initHost(opt)
        opt = this._addDefOpt(opt)
        this._opt = opt
    }
  
    setHeaders(opt:any) {
        if (opt == null) opt = {}
        this._opt.headers = opt
    }
   

    _initHost(host:HttpEntryOpt) {
        if (host == null) return null
        var { ip, port, prefix, https, path } = host
        if (host.url) {
            var url = new URL(host.url)
            ip = url.hostname
            port = url.port
            https = url.protocol != null && url.protocol.substring(0, 5).toLowerCase() == 'https'
            if (port == null || port=='') {
                if (https) {
                    port = '443'
                } else {
                    port = '80'
                }
            }
            prefix = ''
            if (host.prefix == null) {
                prefix = url.pathname
                if (prefix == '/') {
                    prefix = ''
                }
            }
        }

        host.ip = ip;
        host.port = port;
        host.prefix = prefix;
        host.https=https;
        host.path= path;
        return host;
    }

    constructor(opt?:any) {
        if(opt == null){
            opt = {}
        }
        this.setServer(opt)
    }

    setUrl(val:string){
        if(val == null)
            return ;
        var url = new URL(val);
        var ip = url.hostname
        var port = url.port
        var https = url.protocol != null && url.protocol.substring(0, 5).toLowerCase() == 'https'
        if (port == null || port=='') {
            if (https) {
                port = '443'
            } else {
                port = '80'
            }
        }
        var opt = this._opt;
        opt.ip = ip;
        opt.port = port;
        var prefix = url.pathname;
        if (prefix == '/') {
            prefix = ''
        }
        opt.prefix = prefix;
    }

    setPath(path:string){
        if(path == null)
            return ;
        var opt = this._opt;
        opt.path = path;
    }
}


