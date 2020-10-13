import BaseBodyParser from "../bodyParser/BaseBodyParser";
import IParser from "../../inf/IParser";
export default interface HttpEntryOpt {
    https?: boolean;
    method?: string;
    /**
     * url前缀
     */
    prefix?: string;
    /**
     * url的path
     */
    path?: string;
    ip?: string;
    port?: string;
    url?: string;
    headers?: any;
    bodyParser?: BaseBodyParser;
    resultParser?: IParser<string, any>;
    /**
     * 根据param 转url
     */
    urlParser?: IParser<any, string>;
    headerProcessors?: Array<IParser<any, any>>;
}
