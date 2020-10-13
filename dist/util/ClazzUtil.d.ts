/**
 * 各种反射、类
 */
export default class ClazzUtil {
    /**
     * 产生一个代理方法
     * @param obj
     * @param funName
     */
    static proxy(obj: any, funName: any): any;
    /**
     * 产生一个匿名类的实例
     * @param clazz 原始类
     * @param opt 重写的方法列表
     * @param conParams  构造函数参数
     */
    static instance<T>(clazz: any, opt: any, conParams?: any): T;
    /**
     * 产生一个混合类支持重写父类函数
     * @param clazz
     * @param fun 支持重写父类方法
     * function (parent){
     *
     * }
     */
    static extend(clazz: any, fun: Function): any;
    /**
    * 产生一个混合类
    * @param clazz 原始类
    * @param opt 重写的方法列表
    */
    static mixin(clazz: any, opt: any): any;
    /**
     * 重写某个实例的函数
     * @param obj
     * @param opts
     */
    static combine(obj: any, opts: any): any;
}
