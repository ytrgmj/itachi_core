import Operator from '../Operator';
export default class ImpOpt extends Operator {
    private _opt;
    toEs(col: string, val?: any): any;
    constructor(opt: any);
    acqCode(): string;
    acqLevel(): number;
    acqCnt(): number;
    cal(nums: any): number;
}
