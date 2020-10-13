export default class BaseBodyParser {
    builderHeader(param: any): any;
    protected getContentType(param: any): string;
    protected getContentLength(param: any): Number;
    parse(param: any): string;
}
