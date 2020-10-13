/**
函数 运算符
函数运算符只支持一个参数
*/

import Operator from '../Operator'

export default class FunOpt extends Operator{
    private _name:string;
	constructor(name) {
        super();
		this._name = name
		
	}
	/**
	 * 产生es 聚合的输入参数 
	 * @param expressions 
	 */
	toEsAgg(expressions:Array<IToVal>){
		var name = this._name;
		var fun = Funs.get(name);
		if(fun==null)
			return null;
		var exp = expressions[0]
		if (exp != null) {
			exp = exp.toEsAggParam()
		}
		if (fun.noEsEgg) {
			return null
		}
		var ret = {
			[name]: exp
		}
		
		return ret;
	}

	cal(nums:Array<any>):number {
		var fun = Funs.get(this._name)
		if (fun != null && fun.fun) {
			if(nums[0] instanceof Array){
				//逗号计算符返回一个数组
				return fun.fun(nums[0])
			}else{
				return fun.fun(nums)
			}
		}
		return 0
	}


	hasAgg():boolean{
		var fun = Funs.get(this._name)
		if (fun != null && fun.hasAgg) {
			return fun.hasAgg();
		}
		return false;
	}
	

	acqCode() {
		return this._name + '()'
	}
	acqLevel() {
		return 100
	}
	acqCnt() {
		return 1
	}
	_changeStr(nums, expName) {
		var strNums = ''
		if (nums != null && nums.length>0) {
			nums = nums[0]
			strNums = nums[expName]()
		}
		return `${this._name}${strNums}`
	}

	isFun():boolean{
		return true;
	}

	needReadEsResult() {
		var fun = Funs.get(this._name)
		return (fun != null && fun.readEsResult != null)
	}
	readEsResult(result) {
		var fun = Funs.get(this._name)
		if (fun != null && fun.readEsResult != null) {
			return fun.readEsResult(result)
		}
	}

	getBucketPath():string {
		var fun = Funs.get(this._name)
		if (fun != null) {
			return fun.backetPath
		}
		return null
	}
}

import Funs from './funs/Funs'

import IToVal from '../../inf/IToVal'

