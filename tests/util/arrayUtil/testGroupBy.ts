import {ArrayUtil} from '../../../src/util/ArrayUtil'

test('groupBy',function(){
    var list = [
        {id: 3, val: 3000, name: 'aa'},
        {id: 3, val: 300, name: 'aa'},
        {id: 2, val: 20, name: 'aa'},
        {id: 2, val: 200, name: 'aa'},
    
        {id: 3, val: 30, name: 'aa'},
        {id: 2, val: 2, name: 'aa'},
        {id: 4, val: 4, name: 'aa'},
        {id: 4, val: 40, name: 'aa'},
        {id: 5, val: 5, name: 'bb'},
        {id: 6, val: 6, name: 'bb'}
    
    ]
    var array = ArrayUtil.groupBy({
        key: 'id',
        //list: list,
        array:list,
        fun: function (array, e) {
            if (e == 6) { return null }
            var ret = 0;
            for(var obj of array){
                ret+=obj.val;
            }
            return {id:e,val:ret};
        }
    })
    console.log(array);
    expect(array).toContainEqual({id:'3',val:3330})
    
});