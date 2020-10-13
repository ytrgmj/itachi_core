"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
() 运算符
*/
const Operator_1 = __importDefault(require("../Operator"));
class BracketOpt extends Operator_1.default {
    constructor() {
        super();
        this._cnt = 1;
        this._opLen = 0;
    }
    setCnt(cnt) {
        this._cnt = cnt;
    }
    cal(nums) {
        return nums[0];
    }
    acqCode() {
        return '()';
    }
    acqCnt() {
        return this._cnt;
    }
    _changeStr(nums, expName) {
        if (nums == null || nums.length == 0)
            return '()';
        if (nums[0] == null)
            return '()';
        return `(${nums[0][expName]()})`;
    }
    isBracket() {
        return true;
    }
    setOutputLen(opLen) {
        this._opLen = opLen;
    }
    getOutputLen() {
        return this._opLen;
    }
}
exports.default = BracketOpt;
