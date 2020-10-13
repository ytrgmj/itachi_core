import Expression from '../Expression'

export default class StrExpression extends Expression{
	
	toVal(obj):number {
		

		return obj[<string>this._num]
	}

	toEsString() {
		return `doc.${this._num}.value`
	}

}

