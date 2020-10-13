export default interface Bus {
    /**
     * 监听
     * @param id
     * @param fun
     */
    on(id: any, fun: any): any;
    emit(event: any, param?: any): Promise<any>;
}
