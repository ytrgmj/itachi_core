import path from 'path'
import FileContext from '../FileContext'
import OrderFactory from './biz/OrderFactory';

var context = new FileContext();
context.loadFromPath(path.join(__dirname,'./biz'))
let childContext = context.buildChild()
function run(){
    
    let orderFactory:OrderFactory = childContext.get('OrderFactory');
    orderFactory.test('PayOrder');
    orderFactory.test('NormalOrder');
}
run();
run();
