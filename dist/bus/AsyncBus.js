"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 和EventEmitter类似
 * 只不过支持Async，每个处理器都是同步执行
 */
class AsyncBus {
    constructor(opt) {
        this.__AsyncBus = true;
        this._map = {};
        this._opt = opt;
    }
    clear() {
        this._map = {};
    }
    join(wiget) {
        if (wiget != null) {
            wiget.bind(this);
        }
    }
    on(id, fun) {
        if (!fun)
            return null;
        id = id.toString();
        let array = this._getFuns(id);
        array.push(fun);
    }
    _getFuns(id) {
        let array = this._map[id];
        if (array == null) {
            array = [];
            this._map[id] = array;
        }
        return array;
    }
    emit(event, param) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!event)
                return;
            if (!event['__DtEvent']) {
                event = DtEvent_1.default.create(event.toString(), param);
            }
            let array = this._getFuns(event.toString());
            for (let fun of array) {
                yield fun(event);
            }
            return event;
        });
    }
    emitList(id, list) {
        return __awaiter(this, void 0, void 0, function* () {
            if (list == null) {
                return;
            }
            for (let param of list) {
                yield this.emit(id, param);
            }
        });
    }
    /**
     * 从事件中拿
     * @param event
     * @param all
     */
    getFromEvent(event, all) {
        return __awaiter(this, void 0, void 0, function* () {
            var e = yield this.emit(event);
            if (all) {
                return e.getAll();
            }
            else {
                return e.get();
            }
        });
    }
}
exports.default = AsyncBus;
const DtEvent_1 = __importDefault(require("./event/DtEvent"));
