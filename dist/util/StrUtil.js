"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StrUtil = void 0;
/**
 * 字符串处理类
 */
class StrUtil {
    /**
     * 首字母小写
     */
    static firstLower(str) {
        if (!str)
            return;
        str = str.toString();
        var ret = str.substring(0, 1).toLowerCase();
        ret = ret + str.substring(1);
        return ret;
    }
    static firstUpper(str) {
        if (!str)
            return;
        str = str.toString();
        var ret = str.substring(0, 1).toUpperCase();
        ret = ret + str.substring(1);
        return ret;
    }
    static pasical(name) {
        return StrUtil.firstLower(StrUtil.firstUpperPasical(name));
    }
    static firstUpperPasical(name) {
        var names = name.split('_');
        for (var i = 0; i < names.length; i++) {
            names[i] = StrUtil.firstUpper(names[i]);
        }
        return names.join('');
    }
    static removeExtName(str) {
        return str.substring(0, str.indexOf('.'));
    }
    static pad(num, n) {
        var len = num.toString().length;
        while (len < n) {
            num = '0' + num;
            len++;
        }
        return num;
    }
    // 不是string的情况也返回true
    static isEmpty(str) {
        return typeof str !== 'string' || str.length === 0;
    }
    /**
    替换字符串
    */
    static replace(str, substr, replacement) {
        var array = [];
        if (str != null &&
            substr != null) {
            if (replacement == null)
                replacement = '';
            var n = 0;
            while ((n = str.indexOf(substr)) != -1) {
                array.push(str.substring(0, n));
                array.push(replacement);
                str = str.substring(n + substr.length);
            }
            if (str != null) {
                array.push(str);
            }
        }
        return array.join('');
    }
    static start(str, prefix, noCase) {
        if (str == null || prefix == null)
            return false;
        if (noCase) {
            str = str.toLowerCase();
            prefix = prefix.toLowerCase();
        }
        if (str.length < prefix.length)
            return false;
        return str.substring(0, prefix.length) == prefix;
    }
    static startIngoreCase(str, prefix) {
        str = str.toLowerCase();
        prefix = prefix.toLowerCase();
        return StrUtil.start(str, prefix);
    }
    static end(str, suffix, noCase) {
        if (str == null || suffix == null)
            return false;
        if (noCase) {
            str = str.toLowerCase();
            suffix = suffix.toLowerCase();
        }
        if (str.length < suffix.length)
            return false;
        let ret = str.substring(str.length - suffix.length) == suffix;
        return ret;
    }
    static trim(str) {
        if (str == null)
            return null;
        function isWhite(c) {
            return c == ' '
                || c == '\r'
                || c == '\n'
                || c == '\t';
        }
        var i = 0;
        for (; i < str.length; i++) {
            if (!isWhite(str.charAt(i))) {
                break;
            }
        }
        str = str.substring(i);
        for (i = str.length - 1; i >= 0; i--) {
            if (!isWhite(str.charAt(i))) {
                break;
            }
        }
        return str.substring(0, i + 1);
    }
    static split(str, array) {
        if (!(array instanceof Array)) {
            array = [array];
        }
        var list;
        var strs;
        if (str instanceof Array) {
            strs = str;
        }
        else {
            strs = [str];
        }
        for (var key of array) {
            list = [];
            for (var s of strs) {
                list.push(...s.toString().split(key));
            }
            strs = list;
        }
        return list;
    }
    /**
     * 可以通过多个key进行split，防止类似全角的；和;都可以应用
     */
    static splitKeys(str, keys) {
        if (keys.length == 1) {
            return str.split(keys[0]);
        }
        let key = keys[0];
        for (let i = 1; i < keys.length; i++) {
            str = StrUtil.replace(str, keys[i], key);
        }
        return str.split(key);
    }
    /**
    判断是否字符串
    */
    static isStr(str) {
        if (str == null)
            return false;
        return ((typeof str) == 'string') || (str instanceof String);
    }
    static trimList(list) {
        if (list == null)
            return null;
        var array = [];
        for (var str of list) {
            array.push(this.trim(str));
        }
        return array;
    }
    /**
     *
     * @param strs
     * @param key
     */
    static join(strs, key) {
        if (key == null)
            key = '___';
        return strs.join(key);
    }
}
exports.StrUtil = StrUtil;
