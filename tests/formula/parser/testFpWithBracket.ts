import FormulaParser from '../../../src/formula/parser/FormulaParser'

it('测试3',function(){
    var formula = FormulaParser.build('(1+2)*3');
    console.log(formula.toString());
    expect(formula.toVal()).toBe(9);
    
    
})

it('测试4',function(){
    var formula = FormulaParser.build('(1+2)*(3+2)');
    console.log(formula.toString());
    expect(formula.toVal()).toBe(15);
    
    
})
it('测试5',function(){
    var formula = FormulaParser.build('( 5  -( 1 + 2 ))*( 3 + 2 )');
    console.log(formula.toString());
    expect(formula.toVal()).toBe(10);
    
    
})