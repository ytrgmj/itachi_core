import { Stream } from "stream";

/**
 * 一个缓冲的类
 * 可以将多个Buffer转成一个buffer
 * 可以从request读取
 * 目前只在upload中用到，为啥要写这个东西？忘了
 */
export default class Buffers{
    
    private _buffers:Array<Buffer> = []
    private _index:number = 0;
    __Buffers = true;
    /**
     * 将数据读出来，n表示数量
     * @param n 数量
     */
    readTo(n?:number){
        if(n==null){
            n = this.size()-this._index;
        }
        if(n==0)
            return '';
        var retBuffer = new Buffer(n);
        var buffers = this._buffers;
        var bufferIndex = this._acqBufferIndex();
        var retIndex = 0;
        for(;bufferIndex<this._acqBuffersLength();bufferIndex++){
            if(n<=0) break;
            var buffer = this._buffers[bufferIndex];
            var bufferNum = this._acqIndexByBufferNum(bufferIndex);
            var bufferPos = this._index - bufferNum;
            var len = buffer.length-bufferPos;
            var size = len;
            if(len>n){
                size = n
            }
            buffer.copy(retBuffer,retIndex,bufferPos,size+bufferPos);
            retIndex+=size;
            this._index+=size;
            n-=size;
        }
        return retBuffer;
    }
    acqBuffers(){
        return this._buffers;
    }
    /**
     * 增加一个buffer
     * @param buffer 
     */
    add(buffer){
        if(buffer == null || buffer=='') return;
        if((typeof buffer)=='string'){
            buffer = new Buffer(buffer);
        }
        if(buffer.__Buffers){
            this._buffers = this._buffers.concat(buffer.acqBuffers());
        }else{
            this._buffers.push(buffer);
        }
    
    }
    
    reset(){
        this._index = 0;
    }
    /**
     * 从一个其他的流中读数据
     * @param readable 
     */
    readFrom(readable):Promise<Buffers>{
        var buffers = this._buffers;
        var self = this;
        return new Promise(function(resolve,reject){
            readable.on('data',chunk=>buffers.push(chunk));
            readable.on('close',()=>resolve(self));
            readable.on('end',()=>resolve(self));
        });
    }
    /**
     返回buffers 的长度
    */
    protected _acqBuffersLength(){
        return this._buffers.length;
    }
    /**
     返回当前的位置在buffer的位置
    */
   protected _acqIndexOfBuffer():number{
        var n = this._acqIndexByBufferNum(this._acqBufferIndex())
        return this._index - n;
    }
    /**
     * 类似字符串的indexOf函数
     * @param str 
     */
    indexOf(str):number{
        var n = this._acqBufferIndex();
        var first = this._acqIndexOfBuffer();
        var ret = 0;
        for(;n<this._acqBuffersLength();n++){
            var buffer = this._buffers[n];
            var ret =buffer.indexOf(str,first);
            if(ret != -1){
                ret += this._acqIndexByBufferNum(n);
                ret -= this._index;
                return ret;
            }
            first = 0;
        }
        return -1;
    }
      /**
        根据当前buffer的index，算出字符的index
      */
    protected _acqIndexByBufferNum(n):number{
        var ret = 0
        var buffers = this._buffers;
        for(var i=0;i<n;i++){
            var buffer = buffers[i];
            ret += buffer.length;
        }
        return ret;
    }
      /**
      返回当前的buffer 的index
      */
    protected _acqBufferIndex():number{
        var index = this._index;
        var buffers = this._buffers;
        for(var i=0;i<buffers.length;i++){
            var buffer = buffers[i];
            if(buffer.length>index){
                return i;
            }else{
                index -= buffer.length;
            }
        }
        return buffers.length-1;
    
    }
    size():number{
        var size = 0;
        var buffers = this._buffers;
        for(var buffer of buffers){
            size += buffer.length;
        }
        return size;
    }
    toBuffer():Buffer{
        var retBuffer = new Buffer(this.size());
        var buffers = this._buffers;
        var length = 0;
        for(var buffer of buffers){
            buffer.copy(retBuffer,length);
            length+=buffer.length
        }
        return retBuffer;
    }
    toString():string{
        var buffer = this.toBuffer();
        return buffer.toString('utf-8')
    }

    static async get (readable:Stream):Promise<Buffers>{
        var buffers = new Buffers();
        return await buffers.readFrom(readable);
    }
}