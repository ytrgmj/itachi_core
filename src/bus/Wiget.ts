
/**
 * 代码片段
 */
import {StrUtil} from '../util/StrUtil';

export default abstract  class Wiget{
    /**
     * 绑定各种事件
     */
    protected abstract _onBind();
    private _bus:Bus;
    protected _opt:any

    constructor(opt?:any){
        if(opt == null){
            opt = {};
        }
        this._opt = opt;
    }

    bind(bus:Bus){
        this._bus = bus;
        this._onBind()
    }

    on(eventId:string|DtEvent,funName?:string){
        if(funName == null){
            funName = StrUtil.firstLower( eventId.toString());
        }
        
        let fun  = this[funName];
        
        fun = fun.bind(this);
        this._bus.on(eventId,fun);
    }
 }
 import Bus from './inf/Bus'
 
import { DtEvent } from '../core';

 