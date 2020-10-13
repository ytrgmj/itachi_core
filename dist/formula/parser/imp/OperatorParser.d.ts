import BaseCodeParser from './BaseCodeParser';
export default class OperatorParser extends BaseCodeParser {
    protected _process(c: String): boolean;
    process(c: String): boolean;
    _pop(op: Operator): void;
}
import Operator from '../../operator/Operator';
