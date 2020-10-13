import {ArrayUtil} from '../../../src/util/ArrayUtil'

test('是否相同',function(){
    expect(ArrayUtil.isSame(
        [{a:1},{b:1},{a:2,b:3}],
        [{a:1},{b:1},{a:2,b:3}]
    )).toBe(true);

   
})
test('不相同',function(){
    expect(ArrayUtil.isSame(
        [{a:1},{b:1},{a:2,b:3}],
        [{a:1},{b:1}]
    )).toBe(false);
})

test('不相同',function(){
    expect(ArrayUtil.isSame(
        [{a:1},{b:1},{a:2,b:3}],
        [{a:1},{b:1},{a:2,b:3,c:3}]
    )).toBe(false);
})

test('不相同',function(){
    expect(ArrayUtil.isSame(
        [{a:1},{b:1},{a:2,b:3}],
        [{a:1},{b:1},{a:2,b:'dd'}]
    )).toBe(false);
})