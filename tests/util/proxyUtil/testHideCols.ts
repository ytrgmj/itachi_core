import ProxyUtil from '../../../src/util/ProxyUtil'

test('testHideCols',function(){
    let obj:any = {
        aa:123,
        bb:'345',
        cc:'eee'
    }
    let proxyObj = ProxyUtil.hideCols(obj,['bb','cc'])
    console.log(proxyObj.aa);
    console.log(proxyObj.bb);
    console.log(proxyObj.cc);
    for(let e in proxyObj){
        console.log('e',e ,e in proxyObj)
    }
    proxyObj.dd = 'tttt';
    console.log(obj.dd)
    
})