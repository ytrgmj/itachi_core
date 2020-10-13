"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseCodeParser_1 = __importDefault(require("./BaseCodeParser"));
class OperatorParser extends BaseCodeParser_1.default {
    _process(c) {
        throw new Error("Method not implemented.");
    }
    process(c) {
        let op = OperatorFac_1.default.get(c);
        if (op == null) {
            return false;
        }
        this._pop(op);
        let fp = this._fp;
        fp.addOp(op);
        return true;
    }
    _pop(op) {
        let fp = this._fp;
        let lastOp = fp.getLastOp();
        while (lastOp != null
            && !lastOp.isBracket()
            && lastOp.acqLevel() >= op.acqLevel()) {
            fp.popOp();
            fp.addOutput(lastOp);
            lastOp = fp.getLastOp();
        }
    }
}
exports.default = OperatorParser;
const OperatorFac_1 = __importDefault(require("../../operator/OperatorFac"));
