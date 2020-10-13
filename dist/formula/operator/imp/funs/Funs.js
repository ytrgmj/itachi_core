"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map = {
    test: {
        fun: function (nums) {
            var val = nums[1];
            if (val == null)
                val = 1;
            return nums[0] * 2 + val;
        }
    },
    sum: {
        hasAgg() {
            return true;
        }
    },
    max: {
        hasAgg() {
            return true;
        }
    },
    min: {
        hasAgg() {
            return true;
        }
    },
    avg: {
        hasAgg() {
            return true;
        }
    },
    value_count: {},
    cardinality: {},
    count: {
        hasAgg() {
            return true;
        },
        noEsEgg: true,
        backetPath: '_count'
    }
};
class Funs {
    static get(key) {
        return map[key];
    }
    static isFun(key) {
        return Funs.get(key) != null;
    }
}
exports.default = Funs;
