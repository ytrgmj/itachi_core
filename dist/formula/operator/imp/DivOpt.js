"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = __importDefault(require("../Operator"));
/**
 * 除法
 */
class DivOpt extends Operator_1.default {
    cal(nums) {
        return nums[0] / nums[1];
    }
    acqCode() {
        return '/';
    }
    acqLevel() {
        return 2;
    }
}
exports.default = DivOpt;
