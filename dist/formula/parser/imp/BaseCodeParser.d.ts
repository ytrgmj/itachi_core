export default abstract class BaseCodeParser {
    protected _fp: FormulaParser;
    constructor(fp: FormulaParser);
    onEnd(c: String): boolean;
    protected isEnd(c: String): boolean;
    protected _onEnd(c: String): boolean;
    process(c: String): boolean;
    protected _needProcess(c: String): boolean;
    protected abstract _process(c: String): boolean;
    protected _isCode(c: String): boolean;
    protected isNum(c: String): boolean;
    protected isOperator(c: String): boolean;
}
import FormulaParser from '../FormulaParser';
