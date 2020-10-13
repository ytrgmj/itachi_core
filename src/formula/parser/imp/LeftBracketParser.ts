import BaseCodeParser from './BaseCodeParser'

export default class LeftBracketParser extends BaseCodeParser{

	protected _needProcess(c:String){
		return c == '(';
	}
	protected _process(c: String): boolean {
		let fp = this._fp;
		var opt = new BracketOpt();
		opt.setOutputLen(fp.getOutputLen());
		fp.addOp(opt);
		return true;
	}	
}
import BracketOpt from '../../operator/imp/BracketOpt'

import Operator from '../../operator/Operator'



