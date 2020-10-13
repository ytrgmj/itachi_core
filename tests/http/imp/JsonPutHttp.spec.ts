import JsonPutHttp from '../../../src/http/imp/JsonPutHttp'

test('测试put', async function () {
    var http = new JsonPutHttp({
        url: 'http://127.0.0.1:8080',
        path: '/file/removeDate',
    })
    var ret = await http.submit({ aa: 1, bb: 2 })

})