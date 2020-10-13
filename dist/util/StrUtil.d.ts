/**
 * 字符串处理类
 */
export declare class StrUtil {
    /**
     * 首字母小写
     */
    static firstLower(str: string): string;
    static firstUpper(str: string): string;
    static pasical(name: string): string;
    static firstUpperPasical(name: string): string;
    static removeExtName(str: string): string;
    static pad(num: any, n: any): string;
    static isEmpty(str: any): boolean;
    /**
    替换字符串
    */
    static replace(str: string, substr: string, replacement: string): string;
    static start(str: string, prefix: string, noCase?: boolean): boolean;
    static startIngoreCase(str: string, prefix: string): boolean;
    static end(str: string, suffix: string, noCase?: boolean): boolean;
    static trim(str: string): string;
    static split(str: string | Array<string>, array: Array<string>): Array<string>;
    /**
     * 可以通过多个key进行split，防止类似全角的；和;都可以应用
     */
    static splitKeys(str: string, keys: Array<string>): Array<string>;
    /**
    判断是否字符串
    */
    static isStr(str: any): boolean;
    static trimList(list: any): Array<string>;
    /**
     *
     * @param strs
     * @param key
     */
    static join(strs: Array<any>, key?: string): string;
}
