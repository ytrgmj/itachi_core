
export default abstract class BaseCodeParser{
    protected _fp:FormulaParser;

    constructor(fp:FormulaParser) {
        this._fp = fp
    }
    onEnd(c:String):boolean{
        if(!this.isEnd(c)){
            return false;
        }
        return this._onEnd(c);
    }
    protected isEnd(c:String):boolean{
        return c == null;
    }
    protected _onEnd(c:String):boolean{
        return false;
    }

    process (c:String):boolean {
        if(!this._needProcess(c)){
            return false;
        }
        
        return this._process(c);
    }
   
    protected _needProcess(c:String):boolean{
        return false;
    }

    protected abstract _process(c:String):boolean;

    
    protected _isCode(c:String):boolean {
		if (c == '_') {
			return true
		}
		if (c >= 'a' && c <= 'z') {
			return true
		}
		if (c >= 'A' && c <= 'Z') {
			return true
		}
		return false
    }
    
    protected isNum(c:String):boolean{
        if (c >= '0' && c <= '9') {
			return true
		}
		return false
    }

    protected isOperator(c:String):boolean{
        return OperatorFac.isOperator(<string>c);
    }

}
import FormulaParser from '../FormulaParser'
import OperatorFac from '../../operator/OperatorFac'

