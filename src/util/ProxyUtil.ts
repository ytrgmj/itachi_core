import { ArrayUtil } from "itachi_util";

export default class ProxyUtil{
    /**
     * 将某些属性藏起来
     * @param row  隐藏的列
     * @param cols 隐藏的属性列表
     */
    static hideCols(row,cols?){
        if(row == null)
            return row;
        if(cols == null)
            return row;
        if(cols instanceof Array){
            cols = ArrayUtil.toMap(cols);
        }
        return new Proxy(row,{
            has(target,p){
                if(cols[p])
                    return false;
                return p in target;
            },
            ownKeys(target){
                let keys = Object.keys(target);
                return ArrayUtil.filter(keys,key=>!cols[key]);
            }
        })
    }
    /**
     * 将数组中元素的列藏起来
     * @param array 
     * @param cols 
     */
    static hideListCols(array:Array<any>,cols?){
        if(cols == null)
            return array;
        if(cols instanceof Array){
            cols = ArrayUtil.toMap(cols);
        }
        let retArray = [];
        for(let row of array){
            retArray.push(ProxyUtil.hideCols(row,cols))
        }
        return retArray;
    }
}
