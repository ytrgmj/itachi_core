import {DateUtil} from '../../util/DateUtil';

let map:any = null;
let compareMap = {
    '>':function (nums) {
        return nums[0] > nums[1]
    },
    '<':function (nums) {
        return nums[0] < nums[1]
    },
    '>=':function (nums) {
        return nums[0] >= nums[1]
    },
    '<=':function (nums) {
        return nums[0] <= nums[1]
    },
    '!=':function (nums) {
        return nums[0] != nums[1]
    },
    '=':function (nums) {
        return nums[0] == nums[1]
    }
}
function createCompare(op:string){
    return function(nums){
        let fun = compareMap[op];
        if(fun == null)
            return false;
        if(nums[0] == null || nums[1]==null){
            return false;
        }
        if( !(nums[0] instanceof Date) && !(nums[1] instanceof Date)){
            return fun(nums);
        }
        let date0 = DateUtil.parse(nums[0])
        let date1 = DateUtil.parse(nums[1])
        let d0 = 0;
        let d1 = 0;
        if(date0 != null)
            d0 = date0.getTime();
        if(date1 != null)
            d1 = date1.getTime();
        return fun([d0,d1])
    }
}
export default class OperatorFac {
    static get(c:string) :Operator{
        c = StrUtil.trim(c);
        c = c.toLowerCase();
        var map = this.getMap();
        return map[c];
    }
    static isOperator(c:string):boolean{
        return OperatorFac.get(c) != null;
    }

    private static getMap(){
        if(map == null){
            map = OperatorFac._getMap();
        }
        return map;
    }

    private static _getMap(){
        var retMap = {};
        retMap['*'] = new MulOpt();
        retMap['-'] = new SubOpt();
        retMap['/'] = new DivOpt();
        retMap['+'] = new AddOpt();
        retMap[','] = new CommOpt();
        retMap['>'] = new ImpOpt({
            fun :createCompare('>'),
            code: '>',
            es:RangeEs
        })
        retMap['<'] = new ImpOpt({
            fun :createCompare('<'),
            code: '<',
            es:RangeEs
        })

        retMap['='] = new ImpOpt({
            fun :createCompare('='),
            code: '=',
            es:TermEs
        })
        retMap['>='] = new ImpOpt({
            fun :createCompare('>='),
            code: '>=',
            es:RangeEs
        })
        retMap['<='] = new ImpOpt({
            fun :createCompare('<='),
            code: '<=',
            es:RangeEs
        })

        retMap['!='] = retMap['<>'] = new ImpOpt({
            fun:createCompare('!='),
            code:'!=',
            es:MustNotEs

        })

        retMap['in'] =  new ImpOpt({
            fun (nums) {
                var array = nums[1];
                if(array==null) return false;
                if(!(array instanceof Array)) array = [array];
                return ArrayUtil.inArray(array,nums[0])
            },
            code: 'in',
            es:TermEs
        }) 

        retMap['not in'] = new ImpOpt({
            fun (nums) {
                var array = nums[1];
                if(array==null) return false;
                if(!(array instanceof Array)) array = [array];
                return !ArrayUtil.inArray(array,nums[0])
            },
            code: 'not in',
            es:NotInEs
        })

        retMap['like'] = new ImpOpt({
            fun (nums) {
                var val1 = nums[0];
                var val2 = nums[1];
                if(val1 == null) return false;
                if(val2 == null) return false;
                val2 = val2.toLowerCase();
                val1 = val1.toLowerCase();
                return val1.indexOf(val2) != -1
            },
            code: 'like',
            es:LikeEs
        }) 

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
import RangeEs from './es/RangeEs'
import TermEs from './es/TermEs'

import MulOpt from './imp/MulOpt'
import SubOpt from './imp/SubOpt'
import DivOpt from './imp/DivOpt'
import ImpOpt from './imp/ImpOpt'
import AddOpt from './imp/AddOpt'
import {ArrayUtil} from '../../util/ArrayUtil'
import Operator from './Operator'
import MustNotEs from './es/MustNotEs'
import LikeEs from './es/LikeEs';
import NotInEs from './es/NotInEs';
import {StrUtil} from '../../util/StrUtil'
import CommOpt from './imp/CommOpt';




