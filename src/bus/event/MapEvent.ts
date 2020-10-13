import DtEvent from './DtEvent'
export default class MapEvent extends DtEvent{
    protected _map:any = {};
    _check (val):boolean {
        return true
    }
    
    
    add(key, val) {
        if (this._check(val) && val!=null) { 
            this._map[key] = val 
        }
    }
    get():any {
        return this._map
    }
}