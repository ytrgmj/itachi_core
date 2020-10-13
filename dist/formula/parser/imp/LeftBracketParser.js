"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCodeParser_1 = __importDefault(require("./BaseCodeParser"));
class LeftBracketParser extends BaseCodeParser_1.default {
    _needProcess(c) {
        return c == '(';
    }
    _process(c) {
        let fp = this._fp;
        var opt = new BracketOpt_1.default();
        opt.setOutputLen(fp.getOutputLen());
        fp.addOp(opt);
        return true;
    }
}
exports.default = LeftBracketParser;
const BracketOpt_1 = __importDefault(require("../../operator/imp/BracketOpt"));
