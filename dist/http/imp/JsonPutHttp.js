"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseHttpEntry_1 = __importDefault(require("../BaseHttpEntry"));
const StrToJson_1 = __importDefault(require("../../inf/imp/StrToJson"));
const JsonBodyParser_1 = __importDefault(require("../bodyParser/imp/JsonBodyParser"));
class JsonPutHttp extends BaseHttpEntry_1.default {
    _getDefOpt() {
        return {
            method: 'put',
            resultParser: new StrToJson_1.default(),
            bodyParser: new JsonBodyParser_1.default()
        };
    }
}
exports.default = JsonPutHttp;
