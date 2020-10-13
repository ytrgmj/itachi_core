import EsOp from './EsOp'
export default class TermEs extends EsOp{
    protected getTerm(col?:string,val?): string {
        return 'must_not'
    }
    toEs(col:string,val?){
        val = this.parseVal(val);
        var term = this.getTerm(col,val);
        var col = this._col(col)
        return {
            bool:{
                must_not:[
                    {
                        term:{
                            [col]:val
                        }
                    }
                ]
            }
        }
    }
}