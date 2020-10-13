import fs from 'fs'
import path from 'path'
import Buffers from '../../src/buffers/Buffers'


test('测试readto',async function(){
    var buffers = await Buffers.get( fs.createReadStream(path.join(__dirname,'./sample2.txt')));
    /*
    var buffers = await Buffers.get( fs.createReadStream('d:/sample.txt'));
    var buffers2 = await Buffers.get( fs.createReadStream('d:/sample1.txt'));
    buffers.add(buffers2);
    var buffers3 = await Buffers.get( fs.createReadStream('d:/sample2.txt'));
    buffers.add(buffers3);*/
    var n=0;
    while((n=buffers.indexOf('\r\n'))!=-1){
        console.log('n',n)
        var buffer = buffers.readTo(n+2);
        console.log('str',buffer.toString())
    }
    console.log(buffers.readTo().toString())
})