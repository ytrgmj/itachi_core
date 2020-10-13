/// <reference types="node" />
/**
httpEntry 的 父亲类
*/
import http from 'http';
import https from 'https';
import HttpEntryOpt from './opt/HttpEntryOpt';
import IParser from '../inf/IParser';
export default class BaseHttpEntry {
    protected _opt: HttpEntryOpt;
    protected _processors: Array<IParser<any, any>>;
    protected _getDefOpt(): HttpEntryOpt;
    protected _addDefOpt(opt: HttpEntryOpt): HttpEntryOpt;
    protected _isHttps(): boolean;
    protected _isGet(): boolean;
    protected buildUrl(map: any): string;
    protected _buildDefHeader(param: any): any;
    /**
     * 产生一个options给http调用
     * @param param
     */
    protected _parseOption(param: any): any;
    protected _processHead(headers: any, param: any): any;
    /**
     *
     * @param options 提交请求
     * @param param
     */
    protected doRequest(options: any, param: any): Promise<unknown>;
    submit(param: any): Promise<any>;
    protected _acqClient(): typeof https | typeof http;
    writeParam(req: any, param: any): void;
    /**
    可以一个参数 submit ('aaa',123)
    也可以多个参数
    */
    request(param: any): Promise<{
        status: any;
        result: any;
    }>;
    parseResult(data: any): any;
    setServer(opt: HttpEntryOpt): void;
    setHeaders(opt: any): void;
    _initHost(host: HttpEntryOpt): HttpEntryOpt;
    constructor(opt?: any);
    setUrl(val: string): void;
    setPath(path: string): void;
}
