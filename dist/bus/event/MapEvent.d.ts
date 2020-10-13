import DtEvent from './DtEvent';
export default class MapEvent extends DtEvent {
    protected _map: any;
    _check(val: any): boolean;
    add(key: any, val: any): void;
    get(): any;
}
