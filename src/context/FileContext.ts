import {Context} from 'itachi_util'
import path from 'path'

import FileUtil from '../util/FileUtil'
import ConfigFac from '../config/ConfigFac'

export default class FileContext extends Context{

   

  

    
    loadFromPath(filePath:string){
        var self:FileContext = this;
        FileUtil.each(filePath,function(src:string){
            let extName:string = path.extname(src);
            if( extName  == '.js' || (extName == '.ts' && src.indexOf('.d.')==-1)){
                var clazz = require(src)
                if(clazz.default != null){
                    clazz = clazz.default;
                }
                if(clazz.beanId ==''){
                    var srcInfo = path.parse(src);
                    clazz.beanId = srcInfo.name;
                }
                if(clazz.beanId != null){
                    if(clazz.componentId != null){
                        self.regComponent(clazz.componentId,clazz,clazz.beanId)
                    }else{
                        self.regClazz(clazz.beanId,clazz);
                    }
                }
            }
            if(extName == ".json"){
                var json = require(src)
                var srcInfo = path.parse(src);
                self.regBuilder(srcInfo.name,{
                    build(){
                        return json;
                    }
                })
                
            }
        })    
            
    }
}