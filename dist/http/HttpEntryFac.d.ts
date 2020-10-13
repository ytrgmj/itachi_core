/**
 * 工厂类
 */
export default class HttpEntryFac {
    static get(method: string, opt: any): BaseHttpEntry;
    private static getClazz;
}
import { BaseHttpEntry } from '../core';
