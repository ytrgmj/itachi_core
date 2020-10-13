/**
 * AsyncBus的事件类
 */
export default class DtEvent{
    public __DtEvent:boolean = true;
    private _eventId:string = '';
    private _valid:boolean = true;
    private _param:any ;
    constructor(eventId:string, param?:any) {
        this._eventId = eventId
        this._valid = true
        
        if (param) 
            this._param = param
    }
    
    isValid() {
        return this._valid
    }
    
    getEventId () {
        return this._eventId
    }
    
    toString () {
        return this.getEventId()
    }
    
    getParam(){
        return this._param;
    }
    static create(id:string,param:any):DtEvent{
        return new DtEvent(id,param);
    }
}