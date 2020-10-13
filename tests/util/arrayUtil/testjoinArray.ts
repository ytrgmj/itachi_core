import {ArrayUtil} from '../../../src/util/ArrayUtil'


var list = [
	{id: 1, name: 'aaa'},
	{id: 5, name: 'aaa'},

	{id: 2, name: 'bbb', price: 20},

	{id: 3, name: 'cccc', price: 10}

]
var list2 = [
	{id: 3, val: 3000},
	{id: 3, val: 300},
	{id: 2, val: 20},
	{id: 2, val: 200},

	{id: 3, val: 30},
	{id: 2, val: 2},
	{id: 4, val: 4},
	{id: 4, val: 40},

	{id: 6, val: 6}

]
function test1 (opt) {
    console.log('===============')
    console.log(opt)
    console.log('===============')
    if (opt == null) opt = {}

    if (opt.list == null) { opt.list = list }
    if (opt.list2 == null) { opt.list2 = list2 }
    var array = ArrayUtil.joinArray(opt)
    console.log(array)
}
test('测试',function(){
    test1({
        key: 'id',
        fun: function (d1, array) {
            return ArrayUtil.parse(array, data => {
                //一对多合并，将id相同的name设置到另外一个数组
                data.name = d1.name
                return data
            })
        }
    })
});

