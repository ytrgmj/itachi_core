/// <reference types="node" />
import { Stream } from "stream";
/**
 * 一个缓冲的类
 * 可以将多个Buffer转成一个buffer
 * 可以从request读取
 * 目前只在upload中用到，为啥要写这个东西？忘了
 */
export default class Buffers {
    private _buffers;
    private _index;
    __Buffers: boolean;
    /**
     * 将数据读出来，n表示数量
     * @param n 数量
     */
    readTo(n?: number): "" | Buffer;
    acqBuffers(): Buffer[];
    /**
     * 增加一个buffer
     * @param buffer
     */
    add(buffer: any): void;
    reset(): void;
    /**
     * 从一个其他的流中读数据
     * @param readable
     */
    readFrom(readable: any): Promise<Buffers>;
    /**
     返回buffers 的长度
    */
    protected _acqBuffersLength(): number;
    /**
     返回当前的位置在buffer的位置
    */
    protected _acqIndexOfBuffer(): number;
    /**
     * 类似字符串的indexOf函数
     * @param str
     */
    indexOf(str: any): number;
    /**
      根据当前buffer的index，算出字符的index
    */
    protected _acqIndexByBufferNum(n: any): number;
    /**
    返回当前的buffer 的index
    */
    protected _acqBufferIndex(): number;
    size(): number;
    toBuffer(): Buffer;
    toString(): string;
    static get(readable: Stream): Promise<Buffers>;
}
