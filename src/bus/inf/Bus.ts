
export default interface Bus{
    /**
     * 监听
     * @param id 
     * @param fun 
     */
    on (id, fun);
    emit(event, param?:any):Promise<any>;
}