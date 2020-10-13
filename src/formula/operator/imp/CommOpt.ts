/**
 * 逗号运算符
 */
import Operator from '../Operator'
/**
 * 除法
 */
export default class CommOpt extends Operator{
	cal(nums:Array<any>) {
		var ret = [nums[0]]
		if(nums[1] != null){
			if(nums[1] instanceof Array){
				ret.push( ... nums[1])
			}else{
				ret.push(nums[1])
			}
		}
		
		return ret;
    }
    
	acqCode() {
		return ','
    }
    
	acqLevel() {
		return 0
	}
}