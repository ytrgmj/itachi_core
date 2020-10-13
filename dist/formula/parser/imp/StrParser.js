"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCodeParser_1 = __importDefault(require("./BaseCodeParser"));
class StrParser extends BaseCodeParser_1.default {
    constructor() {
        super(...arguments);
        this.token = '';
    }
    _needProcess(c) {
        if (this.token != '') {
            if (c == '.' && this.isNum(c)) {
                return true;
            }
            ;
        }
        return this._isCode(c);
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
        this.token = '';
        let fp = this._fp;
        if (Funs_1.default.isFun(token)) {
            fp.addOp(new FunOpt_1.default(token));
            return true;
        }
        let op = OperatorFac_1.default.get(token);
        if (op != null) {
            fp.addOp(op);
            return true;
        }
        fp.addOutput(new StrExpression_1.default(token));
        return true;
    }
}
exports.default = StrParser;
const StrExpression_1 = __importDefault(require("../../expression/imp/StrExpression"));
const FunOpt_1 = __importDefault(require("../../operator/imp/FunOpt"));
const Funs_1 = __importDefault(require("../../operator/imp/funs/Funs"));
const OperatorFac_1 = __importDefault(require("../../operator/OperatorFac"));
