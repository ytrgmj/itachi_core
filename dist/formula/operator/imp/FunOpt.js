"use strict";
/**
函数 运算符
函数运算符只支持一个参数
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = __importDefault(require("../Operator"));
class FunOpt extends Operator_1.default {
    constructor(name) {
        super();
        this._name = name;
    }
    /**
     * 产生es 聚合的输入参数
     * @param expressions
     */
    toEsAgg(expressions) {
        var name = this._name;
        var fun = Funs_1.default.get(name);
        if (fun == null)
            return null;
        var exp = expressions[0];
        if (exp != null) {
            exp = exp.toEsAggParam();
        }
        if (fun.noEsEgg) {
            return null;
        }
        var ret = {
            [name]: exp
        };
        return ret;
    }
    cal(nums) {
        var fun = Funs_1.default.get(this._name);
        if (fun != null && fun.fun) {
            if (nums[0] instanceof Array) {
                //逗号计算符返回一个数组
                return fun.fun(nums[0]);
            }
            else {
                return fun.fun(nums);
            }
        }
        return 0;
    }
    hasAgg() {
        var fun = Funs_1.default.get(this._name);
        if (fun != null && fun.hasAgg) {
            return fun.hasAgg();
        }
        return false;
    }
    acqCode() {
        return this._name + '()';
    }
    acqLevel() {
        return 100;
    }
    acqCnt() {
        return 1;
    }
    _changeStr(nums, expName) {
        var strNums = '';
        if (nums != null && nums.length > 0) {
            nums = nums[0];
            strNums = nums[expName]();
        }
        return `${this._name}${strNums}`;
    }
    isFun() {
        return true;
    }
    needReadEsResult() {
        var fun = Funs_1.default.get(this._name);
        return (fun != null && fun.readEsResult != null);
    }
    readEsResult(result) {
        var fun = Funs_1.default.get(this._name);
        if (fun != null && fun.readEsResult != null) {
            return fun.readEsResult(result);
        }
    }
    getBucketPath() {
        var fun = Funs_1.default.get(this._name);
        if (fun != null) {
            return fun.backetPath;
        }
        return null;
    }
}
exports.default = FunOpt;
const Funs_1 = __importDefault(require("./funs/Funs"));
