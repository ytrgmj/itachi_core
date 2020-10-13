/**
 * 一个转化器
 */
export default interface IParser<In, Out> {
    parse(opt: In): Out;
}
