import {ArrayUtil} from '../../../src/util/ArrayUtil'

var list = [
  {
    id: 1, name: 'aaa',val:3
  },
  {
    id: 1, name: 'aaa',val:4
  },
  {
    id: 1, name: 'xxx',val:5
  },
  {
    id: 3, name: 'xxx',val:6
  },
  {
    id: 2, name: 'bbb',val:7
  }
]
test ('测试',function(){
    console.log(ArrayUtil.toMapByKey(list, ['name','id']))
    console.log(ArrayUtil.toMapByKey(list,'id'));
    console.log(ArrayUtil.toMapByKey(list,(obj)=>obj.id+"_"+obj.name));
});