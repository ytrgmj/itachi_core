
/**
运算符
- + * /
*/


export default abstract class Operator{
	

	

	/**
	 *运算符
	 */
	abstract acqCode():string;
	abstract cal(nums):any; 

	
	toEs(col:string,val?:any){
		throw new Error('该方法没被实现');
	};
	acqLevel():number {
		return 1
	}
	acqCnt():number {
		return 2
	}

	hasAgg():boolean{
		return false;
	}
	
	toStr(expressions, expFunName?:string, optFunName?:string) {
		if (optFunName == null || this[optFunName] == null) {
			optFunName = 'acqCode'
		}
		if (expFunName == null) {
			expFunName = 'toString'
		}
		return this._changeStr(expressions, expFunName, optFunName)
	}
	protected _changeStr(expressions, expFunName, optFunName) {
		return `${expressions[0][expFunName]()}${this.acqCode()}${expressions[1][expFunName]()}`
	}
	
    
	toFormula(nums, colObj?) {
		var formula = new Formula()
		formula.setExps(nums)
		formula.set(this)
		formula.setColObj(colObj);
		return formula
	}

	isFun():boolean{
		return false;
	}

	isBracket():boolean{
		return false;
	}

	toString():String{
		return this.acqCode();
	}

	toEsAgg(expressions) {
		return null
	}
	/**
	 * 从es的result里面读取，只有opt需要用上
	 * @param row 
	 * @param result 
	 */
	readEsResult(row,result) {

	}

	needReadEsResult(){
		return false;
	}

	getBucketPath():string {
		return null
	}

}
import Formula from '../Formula'