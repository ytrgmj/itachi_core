/**
 * AsyncBus的事件类
 */
export default class DtEvent {
    __DtEvent: boolean;
    private _eventId;
    private _valid;
    private _param;
    constructor(eventId: string, param?: any);
    isValid(): boolean;
    getEventId(): string;
    toString(): string;
    getParam(): any;
    static create(id: string, param: any): DtEvent;
}
