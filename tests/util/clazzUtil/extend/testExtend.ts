import ClazzUtil from '../../../../src/util/ClazzUtil'

class TestParent{
    test1(val:number){
        console.log('TestParent',val)
        this.test2('aaa');
        return val;
    }
    test2(str){
        console.log('TestParent:' ,str);
        
    }
}
var T1Class = ClazzUtil.extend(TestParent,function(parent){
    return {
        test1(val:number){
            val++;
            this.test2('bbbb');
            return parent.test1(val);
        }
    }
})
test('测试ClazzUtil.extend',function(){
    var ins = new T1Class();
    expect(ins.test1(2)).toBe(3);
})

var T2Class = ClazzUtil.extend(T1Class,function(parent){
    return {
        test1(val:number){
            val = val+2;
            this.test2('cccc');
            return parent.test1(val);
        }
    }
})
console.log('===============================');

test('测试ClazzUtil.extend.T2Class',function(){
    var ins = new T2Class();
    expect(ins.test1(2)).toBe(5);
})