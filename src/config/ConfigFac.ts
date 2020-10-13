import path from 'path'

import FileUtil from '../util/FileUtil'

/**
 * 所有 的配置文件的读取
 */
class ConfigFac {
    private _map = {};
    create(){
        return new ConfigFac()
    }

    
    /**
     * 将配置合在一起
     * @param cf 
     */
    link(cf:ConfigFac):ConfigFac{
        if(cf==null)
            return this;
        if(this == cf){
            return this;
        }
        var map = cf._map;
        for(var e in map){
            if(this._map[e] == null){
                this._map[e] = map[e];
            }
        }
        cf._map = this._map;
        return this;

    }
    
    add(key: string, json: any): void {
        var map = this._map;
        map[key] = json;
    }
    
    get(key: string) {
        let _map = this._map;
        var ret = _map[key];
        if (ret == null)
            ret = {};

        return ret;
    }

    /**
    加载配置文件目录
    */
    init(jsonPath: string) {
        var load = require;
        var self = this;
        FileUtil.each(jsonPath, function (src) {
            var extname = path.extname(src);

            if (extname == '.json') {
                var json = load(src);
                var key = path.basename(src, '.json')
                self.add(key, json)
            }

            if (extname == '.js') {
                var json = load(src);
                var key = path.basename(src, '.js')
                self.add(key, json)
            }
        })

    }
}
export default new ConfigFac;
