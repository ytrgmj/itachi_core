import fs from 'fs';
var FileUtil = {
	/*
	遍历目录并执行某函数
	*/
    each: function (src:string, fun:Function, checkFun?:Function):void {
        if (src == null || fun == null) return
        if (checkFun == null) {
            checkFun = function (path) {
                return true
            }
        }
        if (checkFun(src)) {
            var stat = fs.statSync(src)
            if (stat.isFile()) {
                fun(src)
            } else {
                var path = fs.readdirSync(src)
                for (var i = 0; i < path.length; i++) {
                    FileUtil.each(src + '/' + path[i], fun, checkFun)
                }
            }
        }
    }

}
export default FileUtil;
