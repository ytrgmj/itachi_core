import BaseCodeParser from './BaseCodeParser'

export default class RightBracketParser extends BaseCodeParser{

	protected _needProcess(c:String){
		return c == ')';
	}
	protected _process(c: String): boolean {
		let fp = this._fp;
		let op:Operator = null
		while((op = fp.popOp())!=null && !op.isBracket()){
			fp.addOutput(op);
		}

		if(op != null && op.isBracket()){
			var bracket:BracketOpt =<BracketOpt> op;
			//判断空括号
			if(fp.getOutputLen() == bracket.getOutputLen()){
				bracket.setCnt(0);
			}
		}
		if(op != null){
			fp.addOutput(op);
		}
		let lastOp = fp.getLastOp();
		if(lastOp!=null && lastOp.isFun()){
			fp.addOutput(fp.popOp())
		}
		
		return true;
	}

	


	
}

import Operator from '../../operator/Operator'
import BracketOpt from '../../operator/imp/BracketOpt';



