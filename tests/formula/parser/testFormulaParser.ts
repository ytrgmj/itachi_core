import FormulaParser from '../../../src/formula/parser/FormulaParser'

it('测试',function(){
    var formula = FormulaParser.build('1+2');
    console.log(formula.toString());
    expect(formula.toVal()).toBe(3);
    
    
})


it('测试2',function(){
    var formula = FormulaParser.build('1+2*3');
    console.log(formula.toString());
    expect(formula.toVal()).toBe(7);
    
    
})

it('测试3',function(){
    var formula = FormulaParser.build('1+(3)');
    console.log(formula.toString());
    expect(formula.toVal()).toBe(4);
    
    
})

it('函数',function(){
    var formula = FormulaParser.build('1+test(3)');
    console.log(formula.toString());
    expect(formula.toVal()).toBe(1+3*2+1);
    
    
})


