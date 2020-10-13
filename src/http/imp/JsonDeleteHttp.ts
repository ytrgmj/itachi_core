import BaseHttpEntry from '../BaseHttpEntry'
import HttpEntryOpt from '../opt/HttpEntryOpt';
import StrToJson from '../../inf/imp/StrToJson';
import JsonToUrl from '../../inf/imp/JsonToUrl';
import JsonBodyParser from '../bodyParser/imp/JsonBodyParser';

export default class JsonDeleteHttp extends BaseHttpEntry{
    

    protected _getDefOpt():HttpEntryOpt{
        return {
            method:'delete',
            resultParser:new StrToJson(),
            bodyParser:new JsonBodyParser()
        }
    }
}