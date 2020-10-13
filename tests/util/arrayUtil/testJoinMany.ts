import {ArrayUtil} from '../../../src/util/ArrayUtil'


var list = [
    {id: 1, name: 'aaa'},

    {id: 2, name: 'bbb', price: 30},

    {id: 3, name: 'cccc', price: 10},
    {id: 4, name: 'eee', src_id: 5},
    {id: 5, name: 'bbb', price: 11},


]
var list2 = [
    {id: 32, name: 'bbb', price: 30},
    {id: 33, name: 'bbb', price: 40},
    {id: 30, name: 'cccc', price: 3},
    {id: 'bbb', name: 'ddd', price: 3}

]
function test1 (opt) {

    if (opt == null) opt = {}

    if (opt.list == null) { opt.list = list }
    if (opt.list2 == null) { opt.list2 = list2 }
    var array = ArrayUtil.joinMany(opt)
    console.log(array)
}

test('测试',function(){
    test1({
        key: 'name',

        onlyOne: (array,e) => {
            //console.log('onlyOne',e,array)
        },
        onlyTwo: function (array,e) {
            //console.log('onlyTwo',e,array)
        },
        fun:function(data,data2,e){

            return {
                name:e,
                dataLen:data.length,
                data2Len:data2.length
            }
        }
    })
});


