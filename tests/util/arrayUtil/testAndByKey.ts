import {ArrayUtil} from '../../../src/util/ArrayUtil'

var arr1 = [
	{id: 1, name: 'aaa'},
	{id: 1, name: 'aaa1'},
	{id: 2, name: 'aaa2'},
	{id: 3, name: 'aaa3'},
	{id: 4, name: 'aaa4'},
	{id: 4, name: 'aaa5'},
	{id: 5, name: 'ccc5'}
]
var arr2 = [
	{id: 1, name: 'bbb'},
	{id: 1, name: 'aaa1'},

	{id: 3, name: 'aaa3'},
	{id: 4, name: 'bbb4'},
	{id: 6, name: 'ccc5'},
	{id: 7, name: 'zzz'}

]

function andByKey (key, len) {
    var ret = ArrayUtil.andByKey(arr1,arr2,key)
    console.log('ret',ret);
    
    expect(ret.length).toBe(len)
}
test('测试',function(){
    andByKey('id',3)

    andByKey(['id','name'],2);

    andByKey(function(obj){
        return obj.id+'_'+obj.name
    },2);
})