import BaseHttpEntry from '../BaseHttpEntry'
import HttpEntryOpt from '../opt/HttpEntryOpt';
import StrToJson from '../../inf/imp/StrToJson';
import JsonBodyParser from '../bodyParser/imp/JsonBodyParser';

/**
 * post 请求
 * 参数是json
 * 返回值是json
 */
export default class JsonPostHttp extends BaseHttpEntry{
    

    protected _getDefOpt():HttpEntryOpt{
        return {
            method:'post',
            resultParser:new StrToJson(),
            bodyParser:new JsonBodyParser()
        }
    }
}