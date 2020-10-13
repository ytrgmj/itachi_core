
/**
 * 和EventEmitter类似
 * 只不过支持Async，每个处理器都是同步执行
 */
export default class AsyncBus implements Bus {
    private __AsyncBus:boolean = true;
    private _map:any = {};
    protected _opt:any ;
    constructor(opt?:any){
        this._opt = opt;
    }
    clear(){
        this._map = {}
    }
    
    join(wiget:Wiget){
        if(wiget != null){
            wiget.bind(this)
        }
    }

    on (id, fun) {
        if (!fun) return null
    
        id = id.toString()
        
        let array = this._getFuns(id);
        array.push(fun);
        
    }

    protected _getFuns(id:string):Array<Function>{
        let array = this._map[id];
        if(array == null){
            array = [];
            this._map[id] = array
        }
        return array;
    }
    
     
    async emit(event:string|DtEvent, param?:any) {
        if (!event) return
        if (!event['__DtEvent']) {
            event = DtEvent.create(event.toString(), param)
        }
        let array = this._getFuns(event.toString())
        for(let fun of array){
            await fun(event)
        }
    
        return event
    }
    
    async emitList(id, list:Array<any>) {
        if(list == null){
            return 
        }
        for(let param of list){
            await this.emit(id,param);
        }
    }
    /**
     * 从事件中拿
     * @param event 
     * @param all 
     */
    async getFromEvent (event, all?:boolean) {
        var e:any = await this.emit(event)
        if (all) {
            return e.getAll()
        } else {
            return e.get()
        }
    }
    
}

import Wiget from './Wiget';
import DtEvent from './event/DtEvent';
import Bus from './inf/Bus';
