/**
函数 运算符
函数运算符只支持一个参数
*/
import Operator from '../Operator';
export default class FunOpt extends Operator {
    private _name;
    constructor(name: any);
    /**
     * 产生es 聚合的输入参数
     * @param expressions
     */
    toEsAgg(expressions: Array<IToVal>): {
        [x: string]: IToVal;
    };
    cal(nums: Array<any>): number;
    hasAgg(): boolean;
    acqCode(): string;
    acqLevel(): number;
    acqCnt(): number;
    _changeStr(nums: any, expName: any): string;
    isFun(): boolean;
    needReadEsResult(): boolean;
    readEsResult(result: any): any;
    getBucketPath(): string;
}
import IToVal from '../../inf/IToVal';
