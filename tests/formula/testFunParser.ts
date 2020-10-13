import FormulaParser from '../../src/formula/parser/FormulaParser'

it('测试5',function(){
    var formula = FormulaParser.build('( 5  -test( aa,bb ))*( 3 + 2 )');
    console.log(formula.toString());
    expect(formula.toVal({aa:3,bb:2})).toBe((5-(3*2+2))*(3+2));
    
})