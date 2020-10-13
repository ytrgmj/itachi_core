
/**
一个四则混合运算的公式
*/
import {ArrayUtil,JsonUtil} from "@dt/itachi_util";
import IToVal from "./inf/IToVal";

var id = 0

export default  class Formula implements IToVal {
    private _expressions:Array<IToVal>;
    private _operator:Operator;
	private _id:number;
	private colObj:any;

	
	/**
	 * 传入一个运算符，进行四则混合运算
	 */
	constructor(expressions?:Array<IToVal>) {
		if(expressions != null)
			this._expressions = expressions
		
	}

	setColObj(colObj:any){
		this.colObj = colObj;
	}

	setExps(array):void {
		this._expressions = array
	}

	

	add(expression) {
		if(expression == null)
			return ;
		if (this._expressions == null) {
			this._expressions = []
		}
		this._expressions.push(expression)
	}

	set(oper:Operator):void {
		this._operator = oper
	}

	toVal(obj?:any):any {
        var nums =[]
        for(var expression of this._expressions){
			if(expression!=null)
				nums.push( expression.toVal(obj))
		}
		if (this._operator) {
			return this._operator.cal(nums)
		} else {
			return nums[0]
		}
	}

	toString() {
		var expressions = this._expressions
		var ret
		if (this._operator) {
			ret = this._operator.toStr(expressions)
		} else {
			ret = expressions[0].toString()
		}
		return ret
	}

	

	

	

	acqFormulaId() {
		if (this._id == null) {
			this._id = id++
		}
		return 'f' + this._id
	}

	
	hasAgg():boolean {
		if (this._operator) {
			if (this._operator.hasAgg()) {
				return true
			}
		}
		if (this._expressions) {
			for (var exp of this._expressions) {
				if (exp && exp.hasAgg()) {
					return true
				}
			}
		}
		return false
	}

	parseEsAgg(param:any){
		if (this._operator == null) {
			return null
		}

		if (this._operator.hasAgg()) {
			var aggParam = this._operator.toEsAgg(this._expressions)
			if (aggParam) {
				param[this.toString()] = aggParam
			}
		} else {
			if (this._expressions) {
				for (let exp of this._expressions) {
					if (exp != null) {
						//exp.parseEsAgg(param)
					}
				}
			}
		}
	}

	toEsAggParam() {
		var opt = this._operator
		if (opt == null) {
			return null
		}
		if (opt.isBracket()) {
			var exp = null
			if (this._expressions) {
				exp = this._expressions[0]
			}
			if (exp) {
				return exp.toEsAggParam()
			}
		};
		var str = this.toEsString()
		return {
			script: str
		}
	}

	/**
	 * 在es的脚本中
	 */
	toEsString() {
		if (this._operator == null) {
			return null
		}
		var str = this._operator.toStr(this._expressions, 'toEsString')
		return str
	}

	toEsVal(obj, result){
		function get(key) {
			var col = obj[key]
			if (col == null) {
				return 0
			}
			return col.value
		}
		if (this._operator == null) {
			return null
		}
		if (this._operator.hasAgg()) {
			if (this._operator.needReadEsResult()) {
				return this._operator.readEsResult(obj,result)
			} else {
				return get(this.toString())
			}
		} else {
			if (this._expressions) {
				var exps = [];
				for(var exp  of this._expressions){
					exps.push(exp.toEsVal(obj,result))
				}
				return this._operator.cal(exps)
			}
		}
		return 0
	}

	/**
	 * 往es的having bucket_selector buckets_path 填东西
	 * 默认的表达式是一个boolean表达式
	 * 类似
	 * count() > 10
	 */
	parseEsHaving(param) {
		var exps = this._expressions
		var i = 0

		var array = []
		if (exps[0]) {
			array.push(exps[0].parseBucketsPath(param))
		}
		if (exps[1]) {
			array.push(exps[1].parseBucketsPath(param))
		}
		return this._operator.toStr(array)
	}

	parseBucketsPath(param) {
		var operator = this._operator
		if (operator.hasAgg()) {
			var fid = this.acqFormulaId()
			JsonUtil.set(param, ['having', 'bucket_selector', 'buckets_path', fid], 
				this.toBucketsPath())
			return fid
		} else {
			if (this._expressions) {
				var array = []
				for (var exp of this._expressions) {
					if (exp != null) {
						var fid = exp.parseBucketsPath(param)
						if (fid) {
							array.push(fid)
						}
					}
				}
				return operator.toStr(array)
			}
		}
	}

	toBucketsPath() {
		var operator = this._operator
		var path = operator.getBucketPath()
		if (path != null) {
			return path
		}
		return this.toString()
	}

	parseEsGroupParam(param) {
		if(this._operator == null){
			var exp = this._expressions[0];
			exp.parseEsGroupParam(param);
		}else{
			param.script = {
				inline: this.toEsString()
			}
		}
	}


}
import Operator from "./operator/Operator";


