"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCodeParser_1 = __importDefault(require("./BaseCodeParser"));
class RightBracketParser extends BaseCodeParser_1.default {
    _needProcess(c) {
        return c == ')';
    }
    _process(c) {
        let fp = this._fp;
        let op = null;
        while ((op = fp.popOp()) != null && !op.isBracket()) {
            fp.addOutput(op);
        }
        if (op != null && op.isBracket()) {
            var bracket = op;
            //判断空括号
            if (fp.getOutputLen() == bracket.getOutputLen()) {
                bracket.setCnt(0);
            }
        }
        if (op != null) {
            fp.addOutput(op);
        }
        let lastOp = fp.getLastOp();
        if (lastOp != null && lastOp.isFun()) {
            fp.addOutput(fp.popOp());
        }
        return true;
    }
}
exports.default = RightBracketParser;
