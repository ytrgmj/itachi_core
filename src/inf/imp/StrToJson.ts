import IParser from "../IParser";

export default class StrToJson implements IParser<string,any>{
    parse(opt: string): any {
        return JSON.parse(opt);
    }
    
}