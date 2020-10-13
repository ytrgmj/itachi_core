import Expression from '../Expression';
export default class StrExpression extends Expression {
    toVal(obj: any): number;
    toEsString(): string;
}
