import IParser from "../IParser";

export default class JsonToUrl implements IParser<any,string>{
    parse(urlParam: any): string {
        var array = []
        for (var e in urlParam) {
            if (typeof urlParam[e] === 'string') {
                array.push(e + '=' + encodeURIComponent(urlParam[e]))
            } else {
                if(urlParam[e] instanceof Array){
                    let vals = urlParam[e];
                    for(let val of vals){
                        array.push(e+'=' +encodeURIComponent(val));
                    }
                }else{
                    array.push(e + '=' + encodeURIComponent(JSON.stringify(urlParam[e])))
                }
            }
        }
        if(array.length>0)
            return array.join('&');
    }
    
}