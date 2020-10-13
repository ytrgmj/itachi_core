/**
 * 各种反射、类
 */
export default class ClazzUtil{
    /**
     * 产生一个代理方法
     * @param obj 
     * @param funName 
     */
    static proxy(obj,funName){
        let fun = obj[funName];
        if(fun)
            return fun.bind(obj);
    }
    /**
     * 产生一个匿名类的实例
     * @param clazz 原始类 
     * @param opt 重写的方法列表
     * @param conParams  构造函数参数
     */
    static instance<T>(clazz,opt,conParams?):T{
        var obj ;
        if(conParams ==null)
            obj = new clazz();
        else
            obj = new clazz(conParams);
        for(var e in opt){
            obj[e] = opt[e];
        }
        return obj;
    }

    /**
     * 产生一个混合类支持重写父类函数
     * @param clazz 
     * @param fun 支持重写父类方法
     * function (parent){
     *      
     * }
     */
    static extend(clazz,fun:Function):any{

        class myclass extends clazz{
            constructor(){
                super();
                var parent = {}
                let funs = fun(parent);
                for(var e in funs){
                    if(this[e]){
                        parent[e] = this[e].bind(this);
                    }
                }
                for(var e in funs){
                    this[e] = funs[e]
                }
            }
        }
        return myclass;
    }
     /**
     * 产生一个混合类
     * @param clazz 原始类 
     * @param opt 重写的方法列表
     */
    static mixin(clazz,opt){
        if(opt==null)
            return clazz;

        for(var e in opt){
            clazz.prototype[e] = opt[e];
        }
        return clazz
    }
    /**
     * 重写某个实例的函数
     * @param obj 
     * @param opts 
     */
    static combine(obj,opts){
        if(obj == null) 
            return null;
        if(opts == null)
            return null;
        for(var e in opts){
            obj[e] = opts[e]
        }
        return obj
    }
}