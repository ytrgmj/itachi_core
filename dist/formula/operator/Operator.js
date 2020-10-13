"use strict";
/**
运算符
- + * /
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class Operator {
    toEs(col, val) {
        throw new Error('该方法没被实现');
    }
    ;
    acqLevel() {
        return 1;
    }
    acqCnt() {
        return 2;
    }
    hasAgg() {
        return false;
    }
    toStr(expressions, expFunName, optFunName) {
        if (optFunName == null || this[optFunName] == null) {
            optFunName = 'acqCode';
        }
        if (expFunName == null) {
            expFunName = 'toString';
        }
        return this._changeStr(expressions, expFunName, optFunName);
    }
    _changeStr(expressions, expFunName, optFunName) {
        return `${expressions[0][expFunName]()}${this.acqCode()}${expressions[1][expFunName]()}`;
    }
    toFormula(nums, colObj) {
        var formula = new Formula_1.default();
        formula.setExps(nums);
        formula.set(this);
        formula.setColObj(colObj);
        return formula;
    }
    isFun() {
        return false;
    }
    isBracket() {
        return false;
    }
    toString() {
        return this.acqCode();
    }
    toEsAgg(expressions) {
        return null;
    }
    /**
     * 从es的result里面读取，只有opt需要用上
     * @param row
     * @param result
     */
    readEsResult(row, result) {
    }
    needReadEsResult() {
        return false;
    }
    getBucketPath() {
        return null;
    }
}
exports.default = Operator;
const Formula_1 = __importDefault(require("../Formula"));
