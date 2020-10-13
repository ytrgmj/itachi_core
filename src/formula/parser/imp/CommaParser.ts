import BaseCodeParser from './BaseCodeParser'
/**
 * 逗号解析器
 */
export default class LeftBracketParser extends BaseCodeParser{

	protected _needProcess(c:String){
		return c == ',' || '，'==c;
	}
	protected _process(c: String): boolean {
		let fp = this._fp;
		fp.addOp(new BracketOpt());
		return true;
	}	
}
import BracketOpt from '../../operator/imp/BracketOpt'

import Operator from '../../operator/Operator'



