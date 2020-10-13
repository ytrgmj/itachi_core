/*
 * @Author       : kaikai.hou
 * @Email        : kaikai.hou@downtown8.com
 * @Description  : Balabala
 * @Date         : 2020-02-11 10:33:05
 * @LastEditors  : kaikai.hou
 * @LastEditTime : 2020-02-12 11:59:45
 */

import { DateUtil } from './DateUtil'
import { ArrayUtil } from './ArrayUtil'
import { AnyObject } from '../interface'

import _ from 'lodash'
import { Bean } from '@dt/itachi_util'

export class BeanUtil {
    /**
     * 
     * @param obj 
     */
    static keys(obj):Array<string>{
        let keys = [];
        if(obj != null){
            for(let e in obj){
                keys.push(e)
            }
        }
        return keys;
    }

    /**
     * 合并两个参数
     * @param map1 
     * @param map2 
     * @param fun 
     */
    static shallowCombine(map1:any, map2:any, fun?:any):any {
		if(map1==null) map1 = {};
		if(map2==null) map2 = {};
		if (fun == null) {
			fun = function(d1, d2) {
				return d1
			}
		}
		var map = BeanUtil.shallowClone(map1)
		if (map2 != null) {
			for (var e in map2) {
				if (map[e] == null) {
					map[e] = map2[e]
				} else {
					map[e] = fun(map[e], map2[e])
				}
			}
		}
		return map
	}
    /**
	根据param 检查obj
	*/
    static check(obj, param) {
        if (obj == null || param == null) return true
        let ret = true
        for (let e in param) {
            if (!BeanUtil.isEq(obj[e], param[e])) {

                ret = false
                break
            }
        }
        return ret
    }

    /**
	根据param 检查obj
	*/
    static checkIgnore(obj, param) {
        if (obj == null || param == null) return true
        let ret = true
        for (let e in param) {
            if (!BeanUtil.isEq(obj[e], param[e])) {
                if(obj[e] == null && param[e] ==''){
                    continue;
                }
                if(obj[e] == '' && param[e] ==null){
                    continue;
                }
                ret = false
                break
            }
        }
        return ret
    }

    static isEq(val1, val2) {
        if (val1 == null || val2 == null) return (val1 == val2)
        if ((val1 instanceof Date || val2 instanceof Date)) {
            val1 = DateUtil.parse(val1);
            val2 = DateUtil.parse(val2)
            return val1.getTime() == val2.getTime()
        }
        if ((val1 instanceof Array) && (val2 instanceof Array)) {
            return ArrayUtil.isSame(val1, val2)
        }
        if (!isNaN(val1) && !isNaN(val2)) {
            return Math.abs(val1 - val2) < 0.00001
        }
        if (val1 instanceof Object &&
            val2 instanceof Object) {
            return BeanUtil.isBeanEq(val1, val2);
        }
        return val1 == val2
    }

    static isBeanEq(bean1, bean2) {
        if (bean1 == null || bean2 == null) return false
        return BeanUtil.check(bean1, bean2) && BeanUtil.check(bean2, bean1)
    }

    /**
	拷贝对象属性
	*/
    static copy(src, target, map?) {
        if (src == null || target == null) {
            return
        }
        if (map != null && map instanceof Array) {
            map = ArrayUtil.toMap(map)
        }
        for (let e in src) {
            let val = src[e]
            if (map == null) {
                if (BeanUtil.isPrim(val)) {
                    target[e] = val
                } else {
                    target[e] = _.cloneDeep(val)
                }
            } else {
                if (map[e]) {
                    if (BeanUtil.isPrim(val)) {
                        target[e] = val
                    } else {
                        target[e] = _.cloneDeep(val)
                    }
                }
            }
        }
    }

    // null ,字符串,数字，日期
    static isPrim(obj) {
        if (obj == null) return true
        if (!(obj instanceof Object)) return true
        if (obj instanceof Array) return true
        return (obj instanceof Date)
    }

    /**
	 * 合并两个map，map1的数据项优先
	 * @param  {[type]} map1 [description]
	 * @param  {[type]} map2 [description]
	 * @return {[type]}      [description]
	 */
    static combine(map1: AnyObject, map2: AnyObject, fun?: Function) {
        if (!map1) map1 = {};
        if (!map2) map2 = {};

        return Object.assign({}, map2, map1)
    }

    static  shallowCloneList(list:Array<any>,map?,forbit?:boolean):Array<any>{
        let retArray = [];
        if (map!= null && map instanceof Array) {
            map = ArrayUtil.toMap(map)
        }
        for(let row of list){
            retArray.push(this.shallowClone(row,map,forbit));
        }
        return retArray;

    }

    static shallowClone(obj,map?,forbit?:boolean){
		var ret = {};
		if(obj  != null){
			if (map!= null && map instanceof Array) {
				map = ArrayUtil.toMap(map)
			}
			function hit(name, obj) {
				if (map == null) return true
				if (map instanceof Function) {
					return map(name, obj)
				}				
				var mapRet = map[name]
				if (forbit) {
					mapRet = !mapRet
				}
				return mapRet
			}

			for(var e in obj){
				if(hit(e,obj))
					ret[e] = obj[e]
			}
		}
		return ret;
    }
    /**
     * 判断相等
     * @param obj1 
     * @param obj2 
     * @param cols 
     */
    static isEqual(obj1,obj2,cols?:Array<string>){
        if(cols == null){
            for(var e in obj1){
                if(obj1[e] !== obj2[e])
                    return false;
            }
            return true;
        }else{
            for(let col of cols){
                if(obj1[col] != obj2[col])
                    return false;
            }
            return true;
        }

    }

    static isObject(obj){
        if(obj == null){
            return false;
        }
        return (Object.prototype.toString.call(obj) === '[object Object]')
    }
    /**
     * 遍历一个data
     * @param data 
     * @param process 
     */
    static each(data,process){
        if(data == null)
            return null;
        function fun(val,key?,data?){
            if(val instanceof Array){
                for(let i=0;i<val.length;i++){
                    fun(val[i],i,val)
                }
            }else if(BeanUtil.isObject(val)){
                for(var e in val){
                    fun(val[e],e,val);
                }
            }else{
                process(data,key,val);
            }
        }
        fun(data);
    }
    /**
     * 遍历一个data
     * @param data 
     * @param process 
     */
    static eachFun(fun):Function{
        return function(obj){
            BeanUtil.each(obj,fun);
            return obj;
        }
    }

    static get(obj,key:string|Array<string>|Function){
        if(key == null)
            return obj;
        if (key instanceof Function) {
            return key(obj)
        }
        var ret = []
        if(key instanceof Array){
            for(var k of key){
                ret.push(obj[k])
                
            }
            return ret.join('___');
        }else{
            return obj[key];
        }
    }


}