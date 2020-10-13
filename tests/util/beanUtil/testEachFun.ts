import {BeanUtil} from '../../../src/util/BeanUtil'
test('testEach',function(){
    // let aaa = {
    //     aaa:123,
    //     bbb:'string',
    //     ccc:{
    //         ddd:[1,2,3],
    //     }
    // }
    let aaa = {
        aaa:1,
        bbb:'aaaa',
        ccc:[
            'aaa',
            'bbb',
            {
                ddd:[1,2,{fff:123}],
                eee:'fff'
            }
        ],
        fff:{
            mmm:123,
            nnn:[1,2,3]
        }

    }
    let fun =BeanUtil.eachFun(function(obj,e,val){
        console.log('e',e,val);
        
    })
    fun(aaa);
})
