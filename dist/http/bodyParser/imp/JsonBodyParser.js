"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseBodyParser_1 = __importDefault(require("../BaseBodyParser"));
class JsonBodyParser extends BaseBodyParser_1.default {
    getContentType(param) {
        return 'application/json';
    }
    parse(param) {
        var ret = JSON.stringify(param);
        return ret;
    }
}
exports.default = JsonBodyParser;
