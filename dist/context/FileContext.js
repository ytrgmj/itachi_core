"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itachi_util_1 = require("itachi_util");
const path_1 = __importDefault(require("path"));
const FileUtil_1 = __importDefault(require("../util/FileUtil"));
class FileContext extends itachi_util_1.Context {
    loadFromPath(filePath) {
        var self = this;
        FileUtil_1.default.each(filePath, function (src) {
            let extName = path_1.default.extname(src);
            if (extName == '.js' || (extName == '.ts' && src.indexOf('.d.') == -1)) {
                var clazz = require(src);
                if (clazz.default != null) {
                    clazz = clazz.default;
                }
                if (clazz.beanId == '') {
                    var srcInfo = path_1.default.parse(src);
                    clazz.beanId = srcInfo.name;
                }
                if (clazz.beanId != null) {
                    if (clazz.componentId != null) {
                        self.regComponent(clazz.componentId, clazz, clazz.beanId);
                    }
                    else {
                        self.regClazz(clazz.beanId, clazz);
                    }
                }
            }
            if (extName == ".json") {
                var json = require(src);
                var srcInfo = path_1.default.parse(src);
                self.regBuilder(srcInfo.name, {
                    build() {
                        return json;
                    }
                });
            }
        });
    }
}
exports.default = FileContext;
