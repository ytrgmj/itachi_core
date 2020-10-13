/**
运算符
- + * /
*/
export default abstract class Operator {
    /**
     *运算符
     */
    abstract acqCode(): string;
    abstract cal(nums: any): any;
    toEs(col: string, val?: any): void;
    acqLevel(): number;
    acqCnt(): number;
    hasAgg(): boolean;
    toStr(expressions: any, expFunName?: string, optFunName?: string): string;
    protected _changeStr(expressions: any, expFunName: any, optFunName: any): string;
    toFormula(nums: any, colObj?: any): Formula;
    isFun(): boolean;
    isBracket(): boolean;
    toString(): String;
    toEsAgg(expressions: any): any;
    /**
     * 从es的result里面读取，只有opt需要用上
     * @param row
     * @param result
     */
    readEsResult(row: any, result: any): void;
    needReadEsResult(): boolean;
    getBucketPath(): string;
}
import Formula from '../Formula';
