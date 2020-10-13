import BaseCodeParser from './BaseCodeParser'

export default class StrParser extends BaseCodeParser{
    private token:string = '';
	protected _needProcess(c:String){
        if( this.token!=''){
            if( c == '.' && this.isNum(c)){
                return true;
            };
        }
        
	    return this._isCode(c);
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
        this.token = '';
        let fp = this._fp;
        if(Funs.isFun(token)){
            fp.addOp(new FunOpt(token));
            return true;
        }
        let op = OperatorFac.get(token)
        if(op != null){
            fp.addOp(op);
            return true;
        }
        fp.addOutput(new StrExpression(token));
        
        return true;
    }



}
import StrExpression from '../../expression/imp/StrExpression';

import FunOpt from '../../operator/imp/FunOpt'
import Funs from '../../operator/imp/funs/Funs'

import BracketOpt from '../../operator/imp/BracketOpt'

import Operator from '../../operator/Operator'
import OperatorFac from '../../operator/OperatorFac';


