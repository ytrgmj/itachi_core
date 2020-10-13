import BaseCodeParser from './BaseCodeParser'

export default class OperatorParser extends BaseCodeParser{
    protected _process(c: String): boolean {
        throw new Error("Method not implemented.");
    }

	
	process(c: String): boolean {
        let op = OperatorFac.get(<string>c);
        
        if(op == null){
            return false;
        }
        this._pop(op)
        let fp = this._fp;
        fp.addOp(op);
        return true;
	}

    _pop(op:Operator){
        let fp = this._fp;
        let lastOp = fp.getLastOp();
        while(lastOp != null 
            && !lastOp.isBracket() 
            && lastOp.acqLevel() >= op.acqLevel()){
            fp.popOp();
            fp.addOutput(lastOp);
            lastOp = fp.getLastOp();
        }
    }
	


	
}
import Funs from '../../operator/imp/funs/Funs'

import Operator from '../../operator/Operator'
import OperatorFac from '../../operator/OperatorFac'



