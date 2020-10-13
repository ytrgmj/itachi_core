import IToVal from '../inf/IToVal';
export default abstract class Expression implements IToVal {
    parseBucketsPath(param: any): string;
    parseEsGroupParam(param: any): void;
    protected _num: String;
    constructor(num: String);
    abstract toVal(obj: any): number;
    abstract toEsString(): any;
    toString(): string;
    hasAgg(): boolean;
    toEsAggParam(): {
        field: string;
    };
    toEsVal(row: any, result: any): number;
}
