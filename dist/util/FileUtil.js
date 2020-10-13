"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
var FileUtil = {
    /*
    遍历目录并执行某函数
    */
    each: function (src, fun, checkFun) {
        if (src == null || fun == null)
            return;
        if (checkFun == null) {
            checkFun = function (path) {
                return true;
            };
        }
        if (checkFun(src)) {
            var stat = fs_1.default.statSync(src);
            if (stat.isFile()) {
                fun(src);
            }
            else {
                var path = fs_1.default.readdirSync(src);
                for (var i = 0; i < path.length; i++) {
                    FileUtil.each(src + '/' + path[i], fun, checkFun);
                }
            }
        }
    }
};
exports.default = FileUtil;
