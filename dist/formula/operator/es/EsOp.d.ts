export default abstract class EsOp {
    protected _code: string;
    protected abstract getTerm(col: string, val?: any): string;
    constructor(code: string);
    protected _col(col: string): string;
    toEs(col: string, val?: any): {
        [x: string]: {
            [x: string]: any;
        };
    };
    protected parseVal(val: any): any;
}
