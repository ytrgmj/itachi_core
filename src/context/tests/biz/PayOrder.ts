import {Component} from 'itachi_util'
import AbsOrder from './AbsOrder'

@Component('订单')
export default class PayOrder extends AbsOrder{
    constructor(){
        super();
        console.log('PayOrder');
        
    }
    getName(){
        return 'payOrder'
    }
}