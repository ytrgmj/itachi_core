export default class FormulaParser {
    private _output;
    private _stack;
    private _parsers;
    getOutputLen(): number;
    addOp(op: Operator): void;
    popOp(): Operator;
    getLastOp(): Operator;
    addOutput(output: any): void;
    parse(str: string | String): Formula;
    private end;
    private _parse;
    private _getParsers;
    static build(str: string): Formula;
}
import Operator from "../operator/Operator";
import Formula from "../Formula";
