/*
 * @Author       : kaikai.hou
 * @Email        : kaikai.hou@downtown8.com
 * @Description  : Balabala
 * @Date         : 2020-02-11 10:53:23
 * @LastEditors  : kaikai.hou
 * @LastEditTime : 2020-02-11 14:17:52
 */
function _changeMonth(date:Date, changeCnt) {
    date = DateUtil.parse(date)
    var cnt = date.getMonth()
    cnt += changeCnt
    var month = cnt % 12
    var year = Math.floor(cnt / 12)
    if (month < 0) {
        month += 12
        year -= 1
    };
    var ret = new Date()
    ret.setTime(date.getTime())
    ret.setFullYear(date.getFullYear() + year)
    ret.setMonth(month)
    return ret
}
export class DateUtil {
    private static _dayTimes = 24 * 3600 * 1000
    /**
     * @description 将 类似2015-04-16T03:38:12，2015-04-16 的字符串转化成Date对象
     * @param  {[type]} str [description]
     * @return {[type]}	 [description]
     */
    static parse(str) {
        if (str == null || str.length < 10) return null
        if (str instanceof Date) return str
        var date = new Date()
        date.setDate(1)
        date.setFullYear(parseInt(str.substring(0, 4)))
        date.setMonth(parseInt(str.substring(5, 7)) - 1)
        date.setDate(parseInt(str.substring(8, 10)))
        if (str.length >= 19) {
            date.setHours(parseInt(str.substring(11, 13)))
            date.setMinutes(parseInt(str.substring(14, 16)))
            date.setSeconds(parseInt(str.substring(17, 19)))
            date.setMilliseconds(0)
        } else {
            date.setHours(0)
            date.setMinutes(0)
            date.setSeconds(0)
            date.setMilliseconds(0)
        }
       
        if(str.indexOf('T') != -1 && str.indexOf('Z')!=-1){
            var now = new Date();
            var sysOffset = now.getTimezoneOffset();
            date.setTime(date.getTime() - sysOffset*60000)
        }


        return date
        
    }
    static formatList(list:Array<any>, col) {
        if (col == null) {
            col = 'gmt_create'
        }
        if (!(col instanceof Array)) {
            col = [col];
        }
        for (var i = 0; i < list.length; i++) {
            var data = list[i]
            for (var key of col) {
                if (data[key] != null) {
                    data[key] = DateUtil.format(data[key])
                }
            }
        }
    }
    static format(date) {
        if (date.getFullYear == null) {
            return date
        }
        var str = ''
        str = date.getFullYear() + '-'
        var month = date.getMonth() + 1
        if (month < 10) {
            str = str + '0'
        }
        str += month
        str = str + '-'
        var day = date.getDate()
        if (day < 10) {
            str = str + '0'
        }
        str += day
        return str
    }
    static formatDate(date:any):string {
        if(date == null)
            return null;
        if (date.getFullYear == null) {
          return date
        }
        var str = DateUtil.format(date)
        str = str + ' '
        str = str + DateUtil.formatNum(date.getHours())
        str = str + ':'
        str = str + DateUtil.formatNum(date.getMinutes())
        str = str + ':'
        str = str + DateUtil.formatNum(date.getSeconds())
        return str
    }
    private static formatNum(num) {
        num = parseInt(num)
        if (num < 10) return '0' + num
        return num
    }

    static afterDay(date, days):Date {
        
        date = DateUtil.parse(date)
        if (days == 0) return date
        if (days == null) days = 1
        if (days < 0) days = 0
        var ret = new Date()
        ret.setTime(date.getTime() + days * DateUtil._dayTimes)
        return ret
    }

    static afterMonth(date, n:number):Date {
        if (n == null) n = 1
        if (n < 0) throw new Error('参数不合法')
        return _changeMonth(date, n)
    }
      /**
       前面几个月
       */
    static beforeMonth(date, n:number):Date {
        if (n == null) n = 1
        if (n < 0) throw new Error('参数不合法')
        return _changeMonth(date, 0 - n)
    }
}
