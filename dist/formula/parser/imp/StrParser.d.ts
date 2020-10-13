import BaseCodeParser from './BaseCodeParser';
export default class StrParser extends BaseCodeParser {
    private token;
    protected _needProcess(c: String): boolean;
    protected _process(c: String): boolean;
    protected isEnd(c: String): boolean;
    protected _onEnd(c: String): boolean;
}
