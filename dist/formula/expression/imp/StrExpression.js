"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Expression_1 = __importDefault(require("../Expression"));
class StrExpression extends Expression_1.default {
    toVal(obj) {
        return obj[this._num];
    }
    toEsString() {
        return `doc.${this._num}.value`;
    }
}
exports.default = StrExpression;
