import ClazzUtil from '../../../src/util/ClazzUtil'
abstract class TClazz {
    protected abstract  getVal():number;
    test(){
        console.log('getVal',this.getVal());
        return this.getVal();        
    }
}
test('测试',function(){
    var MixinClazz = ClazzUtil.mixin(TClazz,{
        getVal(){
            return 1;
        }
    })
    var ins = new MixinClazz()
    expect(ins.test()).toBe(1);
})

