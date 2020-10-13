import {
    ConfigFac,
    JsonPostHttp,
    JsonGetHttp,
    JsonPutHttp,
    JsonDeleteHttp,
    Context,
} from "../core";
import HttpEntryOpt from "../http/opt/HttpEntryOpt";

export default abstract class BaseHttpInf {
    constructor() {
        this.httpConfig = ConfigFac.get("httpconfig");
    }

    private httpConfig;
    protected httpHostName: string;
    protected httpOtp: HttpEntryOpt;
    protected _context: Context;
    protected logger: any;
    setContext(context: Context) {
        this._context = context;
    }
    getContext() {
        return this._context;
    }

    private _printLogger(message: any) {
        if (this._context == null) return;
        const logger = this._context.getLogger("HttpInf");

        logger.info(message);
    }

    private async _comHttp(httpMethod: any, param?: any) {

        const beginTime = new Date().getTime();
        this.httpOtp = { ...this.httpOtp, ...this.httpConfig[this.httpHostName] };

        if(this._context != null) {
            const context_id = this._context.getId()
            if (this.httpOtp.headers == null) {
                this.httpOtp.headers = {}
            }
            this.httpOtp.headers['context_id'] = context_id
        }
        this._printLogger(this.httpOtp);
        this._printLogger(param);
        const res = await new httpMethod(this.httpOtp).submit(param);

        const endTime = new Date().getTime();

        this._printLogger({ requestTime: endTime - beginTime });

        return res;
    }

    protected async post(param?: any) {
        return await this._comHttp(JsonPostHttp, param);
    }

    protected async get(param?: any) {
        return await this._comHttp(JsonGetHttp, param);
    }

    protected async delete(param?: any) {
        return await this._comHttp(JsonDeleteHttp, param);
    }

    protected async put(param?: any) {
        return await this._comHttp(JsonPutHttp, param);
    }
}
