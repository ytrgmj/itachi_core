import BaseHttpEntry from '../BaseHttpEntry'
import HttpEntryOpt from '../opt/HttpEntryOpt';
import StrToJson from '../../inf/imp/StrToJson';
import JsonToUrl from '../../inf/imp/JsonToUrl';
import JsonBodyParser from '../bodyParser/imp/JsonBodyParser';

export default class JsonPutHttp extends BaseHttpEntry{
    

    protected _getDefOpt():HttpEntryOpt{
        return {
            method:'put',
            resultParser:new StrToJson(),
            bodyParser:new JsonBodyParser()
        }
    }
}