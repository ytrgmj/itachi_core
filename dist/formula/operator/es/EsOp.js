"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EsOp {
    constructor(code) {
        this._code = code;
    }
    _col(col) {
        if (col == 'id') {
            return '_id';
        }
        return col;
    }
    toEs(col, val) {
        val = this.parseVal(val);
        var term = this.getTerm(col, val);
        var col = this._col(col);
        return {
            [term]: {
                [col]: val
            }
        };
    }
    parseVal(val) {
        return val;
    }
}
exports.default = EsOp;
