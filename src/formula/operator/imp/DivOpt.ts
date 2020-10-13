import Operator from '../Operator'
/**
 * 除法
 */
export default class DivOpt extends Operator{
	cal(nums) {
		return nums[0] / nums[1]
    }
    
	acqCode() {
		return '/'
    }
    
	acqLevel() {
		return 2
	}
}