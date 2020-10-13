import {StrUtil} from '../../../src/util/StrUtil'

let str = 'aaa；ddd;dddd';

test('测试',function(){
    console.log(StrUtil.splitKeys(str,[';','；']));
    
})