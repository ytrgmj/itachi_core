"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * AsyncBus的事件类
 */
class DtEvent {
    constructor(eventId, param) {
        this.__DtEvent = true;
        this._eventId = '';
        this._valid = true;
        this._eventId = eventId;
        this._valid = true;
        if (param)
            this._param = param;
    }
    isValid() {
        return this._valid;
    }
    getEventId() {
        return this._eventId;
    }
    toString() {
        return this.getEventId();
    }
    getParam() {
        return this._param;
    }
    static create(id, param) {
        return new DtEvent(id, param);
    }
}
exports.default = DtEvent;
