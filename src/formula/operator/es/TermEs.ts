import EsOp from './EsOp'
export default class TermEs extends EsOp{
    protected getTerm(col?:string,val?): string {
        if(val != null && (val instanceof Array)){
            return 'terms'
        }
        return 'term';
    }
    
}