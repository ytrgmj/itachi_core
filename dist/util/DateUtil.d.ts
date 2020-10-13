export declare class DateUtil {
    private static _dayTimes;
    /**
     * @description 将 类似2015-04-16T03:38:12，2015-04-16 的字符串转化成Date对象
     * @param  {[type]} str [description]
     * @return {[type]}	 [description]
     */
    static parse(str: any): Date;
    static formatList(list: Array<any>, col: any): void;
    static format(date: any): any;
    static formatDate(date: any): string;
    private static formatNum;
    static afterDay(date: any, days: any): Date;
    static afterMonth(date: any, n: number): Date;
    /**
     前面几个月
     */
    static beforeMonth(date: any, n: number): Date;
}
