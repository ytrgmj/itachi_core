import BaseBodyParser from "../BaseBodyParser";
export default class JsonBodyParser extends BaseBodyParser {
    protected getContentType(param: any): string;
    parse(param: any): string;
}
