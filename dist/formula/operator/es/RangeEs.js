"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EsOp_1 = __importDefault(require("./EsOp"));
class RangeEs extends EsOp_1.default {
    getOp() {
        var op = this._code;
        switch (op) {
            case '<':
                op = 'lt';
                break;
            case '<=':
                op = 'lte';
                break;
            case '>':
                op = 'gt';
                break;
            case '>=':
                op = 'gte';
                break;
        }
        return op;
    }
    getTerm(col, val) {
        return 'range';
    }
    toEs(col, val) {
        var term = this.getTerm(col, val);
        var op = this.getOp();
        return {
            [term]: {
                [col]: {
                    [op]: val
                }
            }
        };
    }
}
exports.default = RangeEs;
