import IParser from "../IParser";
export default class JsonToUrl implements IParser<any, string> {
    parse(urlParam: any): string;
}
