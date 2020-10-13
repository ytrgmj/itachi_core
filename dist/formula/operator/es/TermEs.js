"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EsOp_1 = __importDefault(require("./EsOp"));
class TermEs extends EsOp_1.default {
    getTerm(col, val) {
        if (val != null && (val instanceof Array)) {
            return 'terms';
        }
        return 'term';
    }
}
exports.default = TermEs;
