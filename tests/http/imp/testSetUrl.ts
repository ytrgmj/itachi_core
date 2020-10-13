import JsonGetHttp from '../../../src/http/imp/JsonGetHttp'

test('测试get',async function(){
    var http = new JsonGetHttp()
    http.setUrl('http://127.0.0.1:8080');
    http.setPath('/file/removeDate');
    var ret = await http.submit({aa:1,bb:2})
    console.log('ret',JSON.stringify(ret));
    console.log('ret',JSON.stringify(await http.request({aa:1,bb:2})));
    
})