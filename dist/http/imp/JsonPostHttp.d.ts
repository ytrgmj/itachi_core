import BaseHttpEntry from '../BaseHttpEntry';
import HttpEntryOpt from '../opt/HttpEntryOpt';
/**
 * post 请求
 * 参数是json
 * 返回值是json
 */
export default class JsonPostHttp extends BaseHttpEntry {
    protected _getDefOpt(): HttpEntryOpt;
}
