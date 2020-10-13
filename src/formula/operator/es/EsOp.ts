export default abstract class EsOp{
    protected _code :string;
    protected abstract getTerm(col:string,val?):string; 
    constructor(code:string){
        this._code = code;
    }
    protected _col(col:string){
        if(col == 'id'){
            return '_id'
        }
        return col;
    }
    toEs(col:string,val?){
        val = this.parseVal(val);
        var term = this.getTerm(col,val);
        var col = this._col(col)
        return {
            [term]:{
                [col]:val
            }
        }
    }

    protected parseVal(val:any):any {
        return val;
    }


    
}