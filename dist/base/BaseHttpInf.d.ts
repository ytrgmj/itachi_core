import { Context } from "../core";
import HttpEntryOpt from "../http/opt/HttpEntryOpt";
export default abstract class BaseHttpInf {
    constructor();
    private httpConfig;
    protected httpHostName: string;
    protected httpOtp: HttpEntryOpt;
    protected _context: Context;
    protected logger: any;
    setContext(context: Context): void;
    getContext(): Context;
    private _printLogger;
    private _comHttp;
    protected post(param?: any): Promise<any>;
    protected get(param?: any): Promise<any>;
    protected delete(param?: any): Promise<any>;
    protected put(param?: any): Promise<any>;
}
