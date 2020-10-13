

import EsOp from './EsOp'
import {StrUtil} from '../../../util/StrUtil'

export default class LikeEs extends EsOp{
    protected getTerm(col?:string,val?): string {
        return 'wildcard'
    }
    protected parseVal(val:string):string {
        return StrUtil.replace(val, '%', '*')
    }
    
}