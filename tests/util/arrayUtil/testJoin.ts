import {ArrayUtil} from '../../../src/util/ArrayUtil'

var list = [
	{id: 1, name: 'aaa'},

	{id: 2, name: 'bbb', price: 20},

	{id: 3, name: 'cccc', price: 10},
	{id: 4, name: 'eee', src_id: 5}
]
var list2 = [
	{id: 2, name: 'bbb', price: 30},

	{id: 3, name: 'cccc', price: 3},
	{id: 3, name: 'ddd', price: 3}

]
function test1 (opt) {
    console.log('===============')

    if (opt == null) opt = {}

    if (opt.list == null) { opt.list = list }
    if (opt.list2 == null) { opt.list2 = list2 }
    var array = ArrayUtil.join(opt)
    console.log(array)
}

test('测试一下',function(){
    test1({
        key: 'name',
        fun: (data, data2) => data2,
        onlyOne: (data) => {
            data._new = 1
            return data
        },
        onlyTwo: function (data) {
            data._onlyTow = true
            return data
        }
    })
});