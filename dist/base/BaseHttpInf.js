"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
class BaseHttpInf {
    constructor() {
        this.httpConfig = core_1.ConfigFac.get("httpconfig");
    }
    setContext(context) {
        this._context = context;
    }
    getContext() {
        return this._context;
    }
    _printLogger(message) {
        if (this._context == null)
            return;
        const logger = this._context.getLogger("HttpInf");
        logger.info(message);
    }
    _comHttp(httpMethod, param) {
        return __awaiter(this, void 0, void 0, function* () {
            const beginTime = new Date().getTime();
            this.httpOtp = Object.assign(Object.assign({}, this.httpOtp), this.httpConfig[this.httpHostName]);
            if (this._context != null) {
                const context_id = this._context.getId();
                if (this.httpOtp.headers == null) {
                    this.httpOtp.headers = {};
                }
                this.httpOtp.headers['context_id'] = context_id;
            }
            this._printLogger(this.httpOtp);
            this._printLogger(param);
            const res = yield new httpMethod(this.httpOtp).submit(param);
            const endTime = new Date().getTime();
            this._printLogger({ requestTime: endTime - beginTime });
            return res;
        });
    }
    post(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comHttp(core_1.JsonPostHttp, param);
        });
    }
    get(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comHttp(core_1.JsonGetHttp, param);
        });
    }
    delete(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comHttp(core_1.JsonDeleteHttp, param);
        });
    }
    put(param) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._comHttp(core_1.JsonPutHttp, param);
        });
    }
}
exports.default = BaseHttpInf;
