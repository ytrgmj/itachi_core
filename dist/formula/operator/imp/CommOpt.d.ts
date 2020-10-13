/**
 * 逗号运算符
 */
import Operator from '../Operator';
/**
 * 除法
 */
export default class CommOpt extends Operator {
    cal(nums: Array<any>): any[];
    acqCode(): string;
    acqLevel(): number;
}
