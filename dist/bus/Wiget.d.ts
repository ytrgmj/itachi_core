export default abstract class Wiget {
    /**
     * 绑定各种事件
     */
    protected abstract _onBind(): any;
    private _bus;
    protected _opt: any;
    constructor(opt?: any);
    bind(bus: Bus): void;
    on(eventId: string | DtEvent, funName?: string): void;
}
import Bus from './inf/Bus';
import { DtEvent } from '../core';
