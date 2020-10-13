import ClazzUtil from '../../src/util/ClazzUtil'
abstract class Tc {
    test1(){
        console.log('tc:test1');
        return 2;
    }
    test2(){
        return 3;
    }
    abstract test3();
    test(){
        var val = this.test1();
        console.log('tc:test');
        return val+this.test2()+this.test3();;
        
    }

}
test('测试clazzUtil',function(){
    var obj = <Tc>ClazzUtil.instance(Tc,{
        test1(){
            console.log('obj.test1');
            return 1;
        },
        test3(){
            return 4
        }
    });
    expect( obj.test()).toBe(8);
})