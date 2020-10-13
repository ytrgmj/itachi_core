"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 代码片段
 */
const StrUtil_1 = require("../util/StrUtil");
class Wiget {
    constructor(opt) {
        if (opt == null) {
            opt = {};
        }
        this._opt = opt;
    }
    bind(bus) {
        this._bus = bus;
        this._onBind();
    }
    on(eventId, funName) {
        if (funName == null) {
            funName = StrUtil_1.StrUtil.firstLower(eventId.toString());
        }
        let fun = this[funName];
        fun = fun.bind(this);
        this._bus.on(eventId, fun);
    }
}
exports.default = Wiget;
