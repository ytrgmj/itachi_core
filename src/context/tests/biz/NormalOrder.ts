import {Component} from '@dt/itachi_util'
import AbsOrder from './AbsOrder'

@Component('订单')
export default class NormalOrder extends AbsOrder{
    constructor(){
        super();
        console.log('normalOrder');
        
    }
    getName(){
        return 'NormalOrder'
    }
}