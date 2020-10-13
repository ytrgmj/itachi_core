"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Expression_1 = __importDefault(require("../Expression"));
class NumExpression extends Expression_1.default {
    toVal(obj) {
        return parseFloat(this._num);
    }
    toEsString() {
        return this.toVal(null);
    }
}
exports.default = NumExpression;
