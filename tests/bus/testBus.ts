
import Wiget from '../../src/bus/Wiget'
import DtEvent from '../../src/bus/event/DtEvent';
import AsyncBus from '../../src/bus/AsyncBus';

class TestWiget extends Wiget{
    protected _onBind(){
        this.on('test1')
        this.on('test2','_test2')
    }
    test3(){
        console.log('test3');
        
    }

    test1(){
        console.log('----test1');
        this.test3();
    }

    _test2(event:DtEvent){
        console.log('param',event.getParam());
        
    }
}

test('testBUs',async function(){
    let bus = new AsyncBus();
    bus.join(new TestWiget());
    await bus.emit('test1');
    await bus.emit('test2',{aa:123})
    
})