"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 工厂类
 */
class HttpEntryFac {
    static get(method, opt) {
        if (method == null)
            return null;
        let clazz = this.getClazz(method);
        return new clazz(opt);
    }
    static getClazz(method) {
        return map[method.toLowerCase()];
    }
}
exports.default = HttpEntryFac;
const JsonPutHttp_1 = __importDefault(require("./imp/JsonPutHttp"));
const JsonPostHttp_1 = __importDefault(require("./imp/JsonPostHttp"));
const JsonGetHttp_1 = __importDefault(require("./imp/JsonGetHttp"));
const JsonDeleteHttp_1 = __importDefault(require("./imp/JsonDeleteHttp"));
let map = {
    put: JsonPutHttp_1.default,
    post: JsonPostHttp_1.default,
    get: JsonGetHttp_1.default,
    delete: JsonDeleteHttp_1.default
};
