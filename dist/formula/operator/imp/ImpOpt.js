"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = __importDefault(require("../Operator"));
class ImpOpt extends Operator_1.default {
    constructor(opt) {
        super();
        this._opt = opt;
    }
    toEs(col, val) {
        var opt = this._opt;
        if (opt.es == null) {
            throw new Error('指定es生成器');
        }
        var clazz = opt.es;
        var es = new clazz(opt.code);
        return es.toEs(col, val);
    }
    acqCode() {
        var opt = this._opt;
        return opt.code;
    }
    acqLevel() {
        var opt = this._opt;
        var level = opt.level;
        if (level == null) {
            level = 0;
        }
        return level;
    }
    acqCnt() {
        var opt = this._opt;
        var cnt = opt.cnt;
        if (cnt == null) {
            cnt = 2;
        }
        return cnt;
    }
    cal(nums) {
        var opt = this._opt;
        return opt.fun(nums);
    }
}
exports.default = ImpOpt;
