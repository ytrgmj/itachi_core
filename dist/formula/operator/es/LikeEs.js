"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EsOp_1 = __importDefault(require("./EsOp"));
const StrUtil_1 = require("../../../util/StrUtil");
class LikeEs extends EsOp_1.default {
    getTerm(col, val) {
        return 'wildcard';
    }
    parseVal(val) {
        return StrUtil_1.StrUtil.replace(val, '%', '*');
    }
}
exports.default = LikeEs;
