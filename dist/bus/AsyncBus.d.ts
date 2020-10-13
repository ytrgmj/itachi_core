/**
 * 和EventEmitter类似
 * 只不过支持Async，每个处理器都是同步执行
 */
export default class AsyncBus implements Bus {
    private __AsyncBus;
    private _map;
    protected _opt: any;
    constructor(opt?: any);
    clear(): void;
    join(wiget: Wiget): void;
    on(id: any, fun: any): any;
    protected _getFuns(id: string): Array<Function>;
    emit(event: string | DtEvent, param?: any): Promise<string | DtEvent>;
    emitList(id: any, list: Array<any>): Promise<void>;
    /**
     * 从事件中拿
     * @param event
     * @param all
     */
    getFromEvent(event: any, all?: boolean): Promise<any>;
}
import Wiget from './Wiget';
import DtEvent from './event/DtEvent';
import Bus from './inf/Bus';
