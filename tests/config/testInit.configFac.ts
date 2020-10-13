import path from 'path'
import ConfigFac from '../../src/config/ConfigFac'

test("测试init",function(){
    ConfigFac.init(path.join(__dirname,'./json'))
    expect(ConfigFac.get("test1")).toEqual({
        "test":1,
        "test2":"dddd"
    })
    ConfigFac.add("aaa",{aaa:2})
    expect(ConfigFac.get("aaa")).toEqual({aaa:2})
})