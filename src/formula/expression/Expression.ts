import IToVal from '../inf/IToVal'

export default abstract class Expression implements IToVal{
	parseBucketsPath(param:any) {
		return <string>this._num
	}
	parseEsGroupParam(param) {
		param.field = this._num
	}
	
	protected _num:String;

	constructor(num:String){
		this._num = num;
	}

	abstract toVal(obj:any):number ;

	abstract toEsString():any;

	toString(){
		return <string>this._num;
	}

	hasAgg():boolean{
		return false;
	}
	toEsAggParam() {
		return {field:this.toString()};
	}

	toEsVal(row: any, result: any) {
		return this.toVal(row);
	}

	
	
}