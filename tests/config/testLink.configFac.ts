
import ConfigFac from '../../src/config/ConfigFac'

test("测试init",function(){
    var cf1 = ConfigFac.create();
    var cf2 = ConfigFac.create();

    var cf3 = ConfigFac.create();
    cf1.add('aaa','123');
    cf2.add('bbb','444');
    cf3.add('ccc','555');

    expect(cf2.get("aaa")).toEqual({})
    expect(cf1.get("aaa")).toEqual('123')

    cf1.link(cf1);

    expect(cf2.get("aaa")).toEqual({})
    expect(cf1.get("aaa")).toEqual('123')

    cf1.link(cf2);

    expect(cf2.get("aaa")).toEqual('123')
    expect(cf1.get("aaa")).toEqual('123')
    cf2.link(cf1);
    cf2.link(cf3)
    cf3.add('ddd',13)
    expect(cf2.get("aaa")).toEqual('123')
    expect(cf1.get("aaa")).toEqual('123')

    expect(cf1.get("bbb")).toEqual('444')
    expect(cf1.get("ccc")).toEqual('555')

    expect(cf1.get("ddd")).toEqual(13)
})