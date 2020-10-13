import Operator from '../Operator'

export default class ImpOpt extends Operator{
    
    private _opt:any;
    toEs(col: string, val?: any) {
        var opt = this._opt;
        if(opt.es == null){
            throw new Error('指定es生成器')
        }
        var clazz = opt.es;
        var es = new clazz(opt.code)
        return es.toEs(col,val);
    }
    constructor (opt) {
        super();
        this._opt = opt
        
    }

    
    acqCode ():string {
        var opt = this._opt
        return opt.code
    }
    acqLevel ():number {
        var opt = this._opt
        var level = opt.level
        if (level == null) {
            level = 0
        }
        return level
    }
    acqCnt ():number {
        var opt = this._opt
        var cnt = opt.cnt
        if (cnt == null) {
            cnt = 2
        }
        return cnt
    }
    cal (nums):number {
        var opt = this._opt
        return opt.fun(nums)
    }
}
