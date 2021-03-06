export default interface toVal {
    /**
     * 计算值
     * @param obj
     */
    toVal(obj: any): number;
    /**
     * 判断是否有聚合
     */
    hasAgg(): boolean;
    toEsAggParam(): any;
    toEsVal(row: any, result: any): any;
    parseBucketsPath(param: any): string;
    parseEsGroupParam(param: any): any;
}
