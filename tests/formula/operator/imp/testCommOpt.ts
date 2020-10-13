import CommOpt from '../../../../src/formula/operator/imp/CommOpt'
var opt = new CommOpt();
test('两个普通数',function(){
    var ret = opt.cal([1,2]);
    console.log('ret',ret);
    
})

test('数组',function(){
    var ret = opt.cal([1,[2,3]]);
    console.log('ret',ret);
    
})