"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHttpEntry_1 = __importDefault(require("../BaseHttpEntry"));
const StrToJson_1 = __importDefault(require("../../inf/imp/StrToJson"));
const JsonToUrl_1 = __importDefault(require("../../inf/imp/JsonToUrl"));
class JsonGetHttp extends BaseHttpEntry_1.default {
    _getDefOpt() {
        return {
            method: 'get',
            resultParser: new StrToJson_1.default(),
            urlParser: new JsonToUrl_1.default()
        };
    }
}
exports.default = JsonGetHttp;
