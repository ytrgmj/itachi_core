import EsOp from './EsOp';
export default class TermEs extends EsOp {
    protected getTerm(col?: string, val?: any): string;
    toEs(col: string, val?: any): {
        bool: {
            must_not: {
                term: {
                    [x: string]: any;
                };
            }[];
        };
    };
}
