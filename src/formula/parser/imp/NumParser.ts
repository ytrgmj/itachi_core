import BaseCodeParser from './BaseCodeParser'

export default class NumParser extends BaseCodeParser{
    private token:string = '';
	protected _needProcess(c:String):boolean{
        if( this.token!=''){
            if( c == '.')
                return true ;
        }
        
	    return this.isNum(c);
	}
	protected _process(c: String): boolean {
        this.token = this.token+c;
        return true;
    }
    
    protected isEnd(c:String):boolean{
        if(this.token == '')
            return false;
        return super.isEnd(c) 
            || this.isOperator(c) 
            || c==' ' 
            || c=='('
            || c==')' ;
    }

    protected _onEnd(c:String):boolean{
        let token:string = this.token;
        let fp = this._fp;
       
        fp.addOutput(new NumExpression(token));
        this.token = '';
        return true;
    }



}

import NumExpression from '../../expression/imp/NumExpression';



