export default class ProxyUtil {
    /**
     * 将某些属性藏起来
     * @param row  隐藏的列
     * @param cols 隐藏的属性列表
     */
    static hideCols(row: any, cols?: any): any;
    /**
     * 将数组中元素的列藏起来
     * @param array
     * @param cols
     */
    static hideListCols(array: Array<any>, cols?: any): any[];
}
