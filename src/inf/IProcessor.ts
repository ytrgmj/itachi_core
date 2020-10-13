/**
 * 一个转化器
 */
export default interface IProcessor <In>{
    process(opt:In):any;
}