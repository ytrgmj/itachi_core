import JsonGetHttp from '../../../src/http/imp/JsonGetHttp'

test('测试get',async function(){
    var http = new JsonGetHttp({
        url:'http://127.0.0.1:8080',
        path:'/file/removeDate',
        headerProcessors:[{
            parse(){
                console.log('11111');
                
                return {
                    test:1
                }
            }
        }]
    })
    var ret = await http.submit({aa:1,bb:2})
    console.log('ret',JSON.stringify(ret));
    console.log('ret',JSON.stringify(await http.request({aa:1,bb:2})));
    
})