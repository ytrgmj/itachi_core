import Operator from '../Operator'
/**
 * 乘法
 */
export default class MulOpt extends  Operator{
	cal(nums) {
		return nums[0] * nums[1]
	}
	acqCode() {
		return '*'
	}
	acqLevel() {
		return 2
	}
	
}