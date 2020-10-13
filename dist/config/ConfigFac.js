"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const FileUtil_1 = __importDefault(require("../util/FileUtil"));
/**
 * 所有 的配置文件的读取
 */
class ConfigFac {
    constructor() {
        this._map = {};
    }
    create() {
        return new ConfigFac();
    }
    /**
     * 将配置合在一起
     * @param cf
     */
    link(cf) {
        if (cf == null)
            return this;
        if (this == cf) {
            return this;
        }
        var map = cf._map;
        for (var e in map) {
            if (this._map[e] == null) {
                this._map[e] = map[e];
            }
        }
        cf._map = this._map;
        return this;
    }
    add(key, json) {
        var map = this._map;
        map[key] = json;
    }
    get(key) {
        let _map = this._map;
        var ret = _map[key];
        if (ret == null)
            ret = {};
        return ret;
    }
    /**
    加载配置文件目录
    */
    init(jsonPath) {
        var load = require;
        var self = this;
        FileUtil_1.default.each(jsonPath, function (src) {
            var extname = path_1.default.extname(src);
            if (extname == '.json') {
                var json = load(src);
                var key = path_1.default.basename(src, '.json');
                self.add(key, json);
            }
            if (extname == '.js') {
                var json = load(src);
                var key = path_1.default.basename(src, '.js');
                self.add(key, json);
            }
        });
    }
}
exports.default = new ConfigFac;
