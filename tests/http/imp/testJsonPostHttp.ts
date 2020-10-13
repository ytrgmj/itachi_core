import JsonPostHttp from '../../../src/http/imp/JsonPostHttp'

test('测试get',async function(){
    var http = new JsonPostHttp({
        url:'http://127.0.0.1:8080',
        path:'/file/brands_mock'
     
    })
    var ret = await http.submit({
        name:"dddd",
        brandId:2,
        xx:{aaa:1}
    })
    console.log('ret',ret);
    
})