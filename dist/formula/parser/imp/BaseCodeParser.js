"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class BaseCodeParser {
    constructor(fp) {
        this._fp = fp;
    }
    onEnd(c) {
        if (!this.isEnd(c)) {
            return false;
        }
        return this._onEnd(c);
    }
    isEnd(c) {
        return c == null;
    }
    _onEnd(c) {
        return false;
    }
    process(c) {
        if (!this._needProcess(c)) {
            return false;
        }
        return this._process(c);
    }
    _needProcess(c) {
        return false;
    }
    _isCode(c) {
        if (c == '_') {
            return true;
        }
        if (c >= 'a' && c <= 'z') {
            return true;
        }
        if (c >= 'A' && c <= 'Z') {
            return true;
        }
        return false;
    }
    isNum(c) {
        if (c >= '0' && c <= '9') {
            return true;
        }
        return false;
    }
    isOperator(c) {
        return OperatorFac_1.default.isOperator(c);
    }
}
exports.default = BaseCodeParser;
const OperatorFac_1 = __importDefault(require("../../operator/OperatorFac"));
