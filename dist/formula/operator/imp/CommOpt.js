"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 逗号运算符
 */
const Operator_1 = __importDefault(require("../Operator"));
/**
 * 除法
 */
class CommOpt extends Operator_1.default {
    cal(nums) {
        var ret = [nums[0]];
        if (nums[1] != null) {
            if (nums[1] instanceof Array) {
                ret.push(...nums[1]);
            }
            else {
                ret.push(nums[1]);
            }
        }
        return ret;
    }
    acqCode() {
        return ',';
    }
    acqLevel() {
        return 0;
    }
}
exports.default = CommOpt;
