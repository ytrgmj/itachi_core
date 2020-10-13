
export default class FormulaParser{
	private _output:Array<any> = [];
	private _stack :Array<Operator> = [];
	private _parsers : Array<BaseCodeParser> = null;

	getOutputLen():number{
		return this._output.length;
	}

	addOp(op:Operator){
		this._stack.push(op);

	}
	popOp():Operator{
		if(this._stack.length == 0){
			return null;
		}
		
		return this._stack.pop();
	}

	getLastOp():Operator{
		if(this._stack.length == 0)
			return null;
		return this._stack[this._stack.length-1];
	}

	addOutput(output){
		if(output==null){
			throw new Error('output could not be null');
		}
		this._output.push(output);
	}


    parse(str:string|String):Formula{
		for(var i =0;i<str.length;i++){
			this._parse(str.charAt(i))
		}
		this._parse(null);
		return this.end(str);
	}

	private end(str:string|String):Formula{
		var output = this._output
		
		
		var array = []
		let op = null
		while((op = this.popOp())!=null){
			output.push(op);
		}
		
		for (let exp of output) {
			if (exp instanceof Expression) {
				array.push(exp)
			} else {
				if(exp instanceof Operator){
					var nums = []
					for (var i = 0; i < exp.acqCnt(); i++) {
						nums.push(array.pop())
					}

					var formula = exp.toFormula(nums.reverse())
					array.push(formula)
				}
			}
		}
		
		return array[0]
	}

	private _parse(c:String) {
		
		let parsers = this._getParsers();
		
		for(let parser of parsers){
			if(parser.onEnd(c)){
				break;
			}
		}
		for(let parser of parsers){
			
			if(parser.process(c)){
				
				break;
			}
		}
	}

	private _getParsers():Array<BaseCodeParser>{
		if(this._parsers == null){
			this._parsers = [

				new RightBracketParser(this),
				new LeftBracketParser(this),
				new StrParser(this),
				new NumParser(this),
				new OperatorParser(this),
				new CommaParser(this)
			]
		}
		return this._parsers;
	}

	static build(str:string):Formula{
		var fp = new FormulaParser();
		return fp.parse(str);
	}
}
import Expression from "../expression/Expression"

import LeftBracketParser from "./imp/LeftBracketParser"
import StrParser from "./imp/StrParser"
import OperatorParser from "./imp/OperatorParser"

import NumParser from "./imp/NumParser"
import RightBracketParser from "./imp/RightBracketParser"
import Operator from "../operator/Operator"
import Formula from "../Formula"
import BaseCodeParser from "./imp/BaseCodeParser"
import CommaParser from "./imp/CommaParser"









