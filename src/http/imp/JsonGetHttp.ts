import BaseHttpEntry from '../BaseHttpEntry'
import HttpEntryOpt from '../opt/HttpEntryOpt';
import StrToJson from '../../inf/imp/StrToJson';
import JsonToUrl from '../../inf/imp/JsonToUrl';

export default class JsonGetHttp extends BaseHttpEntry{
    

    protected _getDefOpt():HttpEntryOpt{
        return {
            method:'get',
            resultParser:new StrToJson(),
            urlParser:new JsonToUrl()
        }
    }
}