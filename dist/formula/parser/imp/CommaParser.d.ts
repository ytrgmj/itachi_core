import BaseCodeParser from './BaseCodeParser';
/**
 * 逗号解析器
 */
export default class LeftBracketParser extends BaseCodeParser {
    protected _needProcess(c: String): boolean;
    protected _process(c: String): boolean;
}
