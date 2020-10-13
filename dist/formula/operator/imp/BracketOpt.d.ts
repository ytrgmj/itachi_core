/**
() 运算符
*/
import Operator from '../Operator';
export default class BracketOpt extends Operator {
    private _cnt;
    private _opLen;
    constructor();
    setCnt(cnt: number): void;
    cal(nums: any): any;
    acqCode(): string;
    acqCnt(): number;
    _changeStr(nums: any, expName: any): string;
    isBracket(): boolean;
    setOutputLen(opLen: number): void;
    getOutputLen(): number;
}
