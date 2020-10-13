"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EsOp_1 = __importDefault(require("./EsOp"));
class TermEs extends EsOp_1.default {
    getTerm(col, val) {
        return 'must_not';
    }
    toEs(col, val) {
        val = this.parseVal(val);
        var term = this.getTerm(col, val);
        var col = this._col(col);
        return {
            bool: {
                must_not: [
                    {
                        terms: {
                            [col]: val
                        }
                    }
                ]
            }
        };
    }
}
exports.default = TermEs;
