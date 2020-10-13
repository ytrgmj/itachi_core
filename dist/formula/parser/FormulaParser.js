"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
class FormulaParser {
    constructor() {
        this._output = [];
        this._stack = [];
        this._parsers = null;
    }
    getOutputLen() {
        return this._output.length;
    }
    addOp(op) {
        this._stack.push(op);
    }
    popOp() {
        if (this._stack.length == 0) {
            return null;
        }
        return this._stack.pop();
    }
    getLastOp() {
        if (this._stack.length == 0)
            return null;
        return this._stack[this._stack.length - 1];
    }
    addOutput(output) {
        if (output == null) {
            throw new Error('output could not be null');
        }
        this._output.push(output);
    }
    parse(str) {
        for (var i = 0; i < str.length; i++) {
            this._parse(str.charAt(i));
        }
        this._parse(null);
        return this.end(str);
    }
    end(str) {
        var output = this._output;
        var array = [];
        let op = null;
        while ((op = this.popOp()) != null) {
            output.push(op);
        }
        for (let exp of output) {
            if (exp instanceof Expression_1.default) {
                array.push(exp);
            }
            else {
                if (exp instanceof Operator_1.default) {
                    var nums = [];
                    for (var i = 0; i < exp.acqCnt(); i++) {
                        nums.push(array.pop());
                    }
                    var formula = exp.toFormula(nums.reverse());
                    array.push(formula);
                }
            }
        }
        return array[0];
    }
    _parse(c) {
        let parsers = this._getParsers();
        for (let parser of parsers) {
            if (parser.onEnd(c)) {
                break;
            }
        }
        for (let parser of parsers) {
            if (parser.process(c)) {
                break;
            }
        }
    }
    _getParsers() {
        if (this._parsers == null) {
            this._parsers = [
                new RightBracketParser_1.default(this),
                new LeftBracketParser_1.default(this),
                new StrParser_1.default(this),
                new NumParser_1.default(this),
                new OperatorParser_1.default(this),
                new CommaParser_1.default(this)
            ];
        }
        return this._parsers;
    }
    static build(str) {
        var fp = new FormulaParser();
        return fp.parse(str);
    }
}
exports.default = FormulaParser;
const Expression_1 = __importDefault(require("../expression/Expression"));
const LeftBracketParser_1 = __importDefault(require("./imp/LeftBracketParser"));
const StrParser_1 = __importDefault(require("./imp/StrParser"));
const OperatorParser_1 = __importDefault(require("./imp/OperatorParser"));
const NumParser_1 = __importDefault(require("./imp/NumParser"));
const RightBracketParser_1 = __importDefault(require("./imp/RightBracketParser"));
const Operator_1 = __importDefault(require("../operator/Operator"));
const CommaParser_1 = __importDefault(require("./imp/CommaParser"));
