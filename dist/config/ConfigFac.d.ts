/**
 * 所有 的配置文件的读取
 */
declare class ConfigFac {
    private _map;
    create(): ConfigFac;
    /**
     * 将配置合在一起
     * @param cf
     */
    link(cf: ConfigFac): ConfigFac;
    add(key: string, json: any): void;
    get(key: string): any;
    /**
    加载配置文件目录
    */
    init(jsonPath: string): void;
}
declare const _default: ConfigFac;
export default _default;
