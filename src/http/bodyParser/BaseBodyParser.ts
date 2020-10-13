
export default class BaseBodyParser{

    builderHeader(param:any):any{
        var ret =  {}
        var type = this.getContentType(param);
        if(type != null){
            ret['Content-Type'] = type;
            var len = this.getContentLength(param);
            if(len != null){
                ret['Content-length'] = len;
            }
        }
        return ret;
    };

    protected getContentType(param:any):string{
        return null;
    }

    protected getContentLength(param:any):Number{
        var str:string = this.parse(param);
        if(str == null)
            return 0;
        return Buffer.byteLength(str)
        
    }


    parse(param:any):string{
        return null;
    }

}