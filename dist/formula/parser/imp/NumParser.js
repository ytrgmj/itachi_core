"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCodeParser_1 = __importDefault(require("./BaseCodeParser"));
class NumParser extends BaseCodeParser_1.default {
    constructor() {
        super(...arguments);
        this.token = '';
    }
    _needProcess(c) {
        if (this.token != '') {
            if (c == '.')
                return true;
        }
        return this.isNum(c);
    }
    _process(c) {
        this.token = this.token + c;
        return true;
    }
    isEnd(c) {
        if (this.token == '')
            return false;
        return super.isEnd(c)
            || this.isOperator(c)
            || c == ' '
            || c == '('
            || c == ')';
    }
    _onEnd(c) {
        let token = this.token;
        let fp = this._fp;
        fp.addOutput(new NumExpression_1.default(token));
        this.token = '';
        return true;
    }
}
exports.default = NumParser;
const NumExpression_1 = __importDefault(require("../../expression/imp/NumExpression"));
