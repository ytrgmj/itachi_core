import EsOp from './EsOp';
export default class LikeEs extends EsOp {
    protected getTerm(col?: string, val?: any): string;
    protected parseVal(val: string): string;
}
