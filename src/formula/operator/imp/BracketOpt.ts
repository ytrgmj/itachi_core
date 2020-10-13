/**
() 运算符
*/
import Operator from '../Operator'
export default class BracketOpt extends Operator{
	private _cnt:number = 1;
	private _opLen:number = 0;
	constructor(){
		super();
	}
	setCnt(cnt:number){
		this._cnt = cnt;
	}
	cal(nums) {
		return nums[0]
	}
	acqCode() {
		return '()'
	}
	acqCnt() {
		return this._cnt;
	}
	_changeStr(nums, expName) {
		if (nums == null || nums.length == 0) return '()'
		if (nums[0] == null) return '()'
		return `(${nums[0][expName]()})`
	}

	isBracket(){
		return true;
	}
	setOutputLen(opLen:number){
		this._opLen = opLen;
	}
	getOutputLen(){
		return this._opLen;
	}
	
}