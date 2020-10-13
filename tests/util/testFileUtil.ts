import FileUtil from '../../src/util/FileUtil'
import fs from 'fs';
test('测试each',function(){
    FileUtil.each(__dirname,function (params) {
        var str = fs.readFileSync(params);
        console.log(str.toString());
        
    })
});