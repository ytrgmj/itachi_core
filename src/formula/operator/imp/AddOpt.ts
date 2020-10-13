import Operator from '../Operator'

export default class AddOpt extends Operator{
	cal(nums) {
		return nums[0] + nums[1]
	}
	acqCode() {
		return '+'
	}
	
}