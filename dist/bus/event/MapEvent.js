"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DtEvent_1 = __importDefault(require("./DtEvent"));
class MapEvent extends DtEvent_1.default {
    constructor() {
        super(...arguments);
        this._map = {};
    }
    _check(val) {
        return true;
    }
    add(key, val) {
        if (this._check(val) && val != null) {
            this._map[key] = val;
        }
    }
    get() {
        return this._map;
    }
}
exports.default = MapEvent;
