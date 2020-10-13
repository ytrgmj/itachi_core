import Operator from '../Operator'
import { deflate } from 'zlib'
/**
 * 减法
 */
export default class SubOpt extends Operator{
	cal(nums) {
		return nums[0] - nums[1]
	}
	acqCode() {
		return '-'
	}
	
}