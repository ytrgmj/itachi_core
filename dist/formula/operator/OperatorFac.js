"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DateUtil_1 = require("../../util/DateUtil");
let map = null;
let compareMap = {
    '>': function (nums) {
        return nums[0] > nums[1];
    },
    '<': function (nums) {
        return nums[0] < nums[1];
    },
    '>=': function (nums) {
        return nums[0] >= nums[1];
    },
    '<=': function (nums) {
        return nums[0] <= nums[1];
    },
    '!=': function (nums) {
        return nums[0] != nums[1];
    },
    '=': function (nums) {
        return nums[0] == nums[1];
    }
};
function createCompare(op) {
    return function (nums) {
        let fun = compareMap[op];
        if (fun == null)
            return false;
        if (nums[0] == null || nums[1] == null) {
            return false;
        }
        if (!(nums[0] instanceof Date) && !(nums[1] instanceof Date)) {
            return fun(nums);
        }
        let date0 = DateUtil_1.DateUtil.parse(nums[0]);
        let date1 = DateUtil_1.DateUtil.parse(nums[1]);
        let d0 = 0;
        let d1 = 0;
        if (date0 != null)
            d0 = date0.getTime();
        if (date1 != null)
            d1 = date1.getTime();
        return fun([d0, d1]);
    };
}
class OperatorFac {
    static get(c) {
        c = StrUtil_1.StrUtil.trim(c);
        c = c.toLowerCase();
        var map = this.getMap();
        return map[c];
    }
    static isOperator(c) {
        return OperatorFac.get(c) != null;
    }
    static getMap() {
        if (map == null) {
            map = OperatorFac._getMap();
        }
        return map;
    }
    static _getMap() {
        var retMap = {};
        retMap['*'] = new MulOpt_1.default();
        retMap['-'] = new SubOpt_1.default();
        retMap['/'] = new DivOpt_1.default();
        retMap['+'] = new AddOpt_1.default();
        retMap[','] = new CommOpt_1.default();
        retMap['>'] = new ImpOpt_1.default({
            fun: createCompare('>'),
            code: '>',
            es: RangeEs_1.default
        });
        retMap['<'] = new ImpOpt_1.default({
            fun: createCompare('<'),
            code: '<',
            es: RangeEs_1.default
        });
        retMap['='] = new ImpOpt_1.default({
            fun: createCompare('='),
            code: '=',
            es: TermEs_1.default
        });
        retMap['>='] = new ImpOpt_1.default({
            fun: createCompare('>='),
            code: '>=',
            es: RangeEs_1.default
        });
        retMap['<='] = new ImpOpt_1.default({
            fun: createCompare('<='),
            code: '<=',
            es: RangeEs_1.default
        });
        retMap['!='] = retMap['<>'] = new ImpOpt_1.default({
            fun: createCompare('!='),
            code: '!=',
            es: MustNotEs_1.default
        });
        retMap['in'] = new ImpOpt_1.default({
            fun(nums) {
                var array = nums[1];
                if (array == null)
                    return false;
                if (!(array instanceof Array))
                    array = [array];
                return ArrayUtil_1.ArrayUtil.inArray(array, nums[0]);
            },
            code: 'in',
            es: TermEs_1.default
        });
        retMap['not in'] = new ImpOpt_1.default({
            fun(nums) {
                var array = nums[1];
                if (array == null)
                    return false;
                if (!(array instanceof Array))
                    array = [array];
                return !ArrayUtil_1.ArrayUtil.inArray(array, nums[0]);
            },
            code: 'not in',
            es: NotInEs_1.default
        });
        retMap['like'] = new ImpOpt_1.default({
            fun(nums) {
                var val1 = nums[0];
                var val2 = nums[1];
                if (val1 == null)
                    return false;
                if (val2 == null)
                    return false;
                val2 = val2.toLowerCase();
                val1 = val1.toLowerCase();
                return val1.indexOf(val2) != -1;
            },
            code: 'like',
            es: LikeEs_1.default
        });
        return retMap;
        /*
        return if (c == '*') {
            return new MulOpt()
        }
        if (c == '-') {
            return new SubOpt()
        }
        if (c == '/') {
        return new DivOpt()
        }
        if (c == '>') {
        return new ImpOpt({
            fun (nums) {
                return nums[0] > nums[1]
            },
            code: '>'
        })
        }
        if (c == '<') {
            return new ImpOpt({
                fun (nums) {
                return nums[0] < nums[1]
                },
                code: '<'
            })
        }
        if (c == '=') {
            return new ImpOpt({
                fun (nums) {
                return nums[0] == nums[1]
                },
                code: '='
            })
        }
        if (c == '>=') {
            return new ImpOpt({
                fun (nums) {
                return nums[0] >= nums[1]
                },
                code: '>='
            })
        }
        if (c == '<=') {
            return new ImpOpt({
                fun (nums) {
                return nums[0] <= nums[1]
                },
                code: '<='
            })
        }
        if(c.toLowerCase()=='in'){
            return new ImpOpt({
                fun (nums) {
                var array = nums[1];
                if(array==null) return false;
                if(!(array instanceof Array)) array = [array];
                    return ArrayUtil.inArray(array,nums[0])
                },
                code: 'in'
            })
        }
        if(c.toLowerCase()=='like'){
            return new ImpOpt({
                fun (nums) {
                    var val1 = nums[0];
                    var val2 = nums[1];
                    if(val1 == null) return false;
                    if(val2 == null) return false;
                    val2 = val2.toLowerCase();
                    val1 = val1.toLowerCase();
                    return val1.indexOf(val2) != -1
                },
                code: 'like'
            })
        }

        return new AddOpt()*/
    }
}
exports.default = OperatorFac;
const RangeEs_1 = __importDefault(require("./es/RangeEs"));
const TermEs_1 = __importDefault(require("./es/TermEs"));
const MulOpt_1 = __importDefault(require("./imp/MulOpt"));
const SubOpt_1 = __importDefault(require("./imp/SubOpt"));
const DivOpt_1 = __importDefault(require("./imp/DivOpt"));
const ImpOpt_1 = __importDefault(require("./imp/ImpOpt"));
const AddOpt_1 = __importDefault(require("./imp/AddOpt"));
const ArrayUtil_1 = require("../../util/ArrayUtil");
const MustNotEs_1 = __importDefault(require("./es/MustNotEs"));
const LikeEs_1 = __importDefault(require("./es/LikeEs"));
const NotInEs_1 = __importDefault(require("./es/NotInEs"));
const StrUtil_1 = require("../../util/StrUtil");
const CommOpt_1 = __importDefault(require("./imp/CommOpt"));
