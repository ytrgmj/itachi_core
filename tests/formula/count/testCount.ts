import FormulaParser from '../../../src/formula/parser/FormulaParser'

it('测试',function(){
    var formula = FormulaParser.build('count( )');
    console.log(formula.toString());
    
    var formula1 = FormulaParser.build('count(2 ,3)');
    console.log(formula1.toString());
    
    var formula2 = FormulaParser.build('test(2 ,3)');
    console.log(formula2.toString());
    expect(formula2.toVal()).toBe(2*2+3);
    
})