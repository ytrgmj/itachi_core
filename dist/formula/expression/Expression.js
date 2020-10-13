"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Expression {
    constructor(num) {
        this._num = num;
    }
    parseBucketsPath(param) {
        return this._num;
    }
    parseEsGroupParam(param) {
        param.field = this._num;
    }
    toString() {
        return this._num;
    }
    hasAgg() {
        return false;
    }
    toEsAggParam() {
        return { field: this.toString() };
    }
    toEsVal(row, result) {
        return this.toVal(row);
    }
}
exports.default = Expression;
