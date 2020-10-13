/**
 * 工厂类
 */
export default class HttpEntryFac{
    static get(method:string,opt):BaseHttpEntry{
        if(method==null)
            return null;
        let clazz = this.getClazz(method);
        return new clazz(opt);
    }
    private static getClazz(method:string){
        return map[method.toLowerCase()];
    }
}


import JsonPutHttp from './imp/JsonPutHttp'
import JsonPostHttp from './imp/JsonPostHttp'
import JsonGetHttp from './imp/JsonGetHttp'
import JsonDeleteHttp from './imp/JsonDeleteHttp'
import { BaseHttpEntry } from '../core'

let map = {
    put:JsonPutHttp,
    post:JsonPostHttp,
    get:JsonGetHttp,
    delete:JsonDeleteHttp
}