import {ArrayUtil} from '../../../src/util/ArrayUtil'

var list = [
  {
    id: 1, name: 'aaa', text: '1'

  },
  {
    id: 2, name: 'aaa', text: '2'
  },
  {
    id: 1, name: 'xxx', text: '1'
  },
  {
    id: 3, name: 'xxx', text: '1'
  },
  {
    id: 2, name: 'bbb', text: '2'
  }
]
function test1(key,mapKey,len){

    var ret= ArrayUtil.toMapArray(list,key);
    console.log(ret);
    expect(ret[mapKey].length).toBe(2);
    
    
}  
test('测试',function(){
    test1(['name','text'],'xxx_1',4)
    test1('id','2',2)
    test1(obj => obj.name + obj.text,'xxx1',2)
})
