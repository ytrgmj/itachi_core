"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseBodyParser {
    builderHeader(param) {
        var ret = {};
        var type = this.getContentType(param);
        if (type != null) {
            ret['Content-Type'] = type;
            var len = this.getContentLength(param);
            if (len != null) {
                ret['Content-length'] = len;
            }
        }
        return ret;
    }
    ;
    getContentType(param) {
        return null;
    }
    getContentLength(param) {
        var str = this.parse(param);
        if (str == null)
            return 0;
        return Buffer.byteLength(str);
    }
    parse(param) {
        return null;
    }
}
exports.default = BaseBodyParser;
