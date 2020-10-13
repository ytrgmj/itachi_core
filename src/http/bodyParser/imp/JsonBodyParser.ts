import BaseBodyParser from "../BaseBodyParser";

export default class JsonBodyParser extends BaseBodyParser{
    protected getContentType(param:any){
        return 'application/json'
    }
    
    parse(param:any):string{

        var ret = JSON.stringify(param);
       
        return ret;
    }
}