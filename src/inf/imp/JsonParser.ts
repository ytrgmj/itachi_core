import IParser from "../IParser";

export default class JSONParser implements IParser<any,String>{
    parse(opt: any): String {
        return JSON.stringify(opt);
    }
    
}