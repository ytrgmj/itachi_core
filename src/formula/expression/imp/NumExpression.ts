import Expression from '../Expression'

export default class NumExpression extends Expression{
	
	toVal(obj):number {
        return parseFloat(<string>this._num);
	}
	toEsString() {
		return this.toVal(null);
	}
}

