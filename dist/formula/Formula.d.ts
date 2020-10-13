import IToVal from "./inf/IToVal";
export default class Formula implements IToVal {
    private _expressions;
    private _operator;
    private _id;
    private colObj;
    /**
     * 传入一个运算符，进行四则混合运算
     */
    constructor(expressions?: Array<IToVal>);
    setColObj(colObj: any): void;
    setExps(array: any): void;
    add(expression: any): void;
    set(oper: Operator): void;
    toVal(obj?: any): any;
    toString(): any;
    acqFormulaId(): string;
    hasAgg(): boolean;
    parseEsAgg(param: any): any;
    toEsAggParam(): any;
    /**
     * 在es的脚本中
     */
    toEsString(): string;
    toEsVal(obj: any, result: any): any;
    /**
     * 往es的having bucket_selector buckets_path 填东西
     * 默认的表达式是一个boolean表达式
     * 类似
     * count() > 10
     */
    parseEsHaving(param: any): string;
    parseBucketsPath(param: any): string;
    toBucketsPath(): any;
    parseEsGroupParam(param: any): void;
}
import Operator from "./operator/Operator";
