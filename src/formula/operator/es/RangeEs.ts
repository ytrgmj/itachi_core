import EsOp from './EsOp'
export default class RangeEs extends EsOp{
    protected getOp(): string {
        var op = this._code;
        switch (op) {
        case '<':
            op = 'lt'
            break
        case '<=':
            op = 'lte'
            break
        case '>':
            op = 'gt'
            break
        case '>=':
            op = 'gte'
            break
        }
        return op;
    }
    protected getTerm(col?:string,val?): string {
        return 'range';
    }

    toEs(col:string,val?){
        var term = this.getTerm(col,val);
        var op = this.getOp();
        return {
            [term]:{
                [col]:{
                    [op]:val
                }
            }
        }
    }
    
}