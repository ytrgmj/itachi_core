import Expression from '../Expression';
export default class NumExpression extends Expression {
    toVal(obj: any): number;
    toEsString(): number;
}
