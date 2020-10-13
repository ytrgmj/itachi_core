import FormulaParser from '../../../src/formula/parser/FormulaParser'


it(' 5-3*2',function(){
    var formula = FormulaParser.build(' 5-3*2');
    console.log(formula.toString(),formula.toVal());
    expect(formula.toVal()).toBe(-1);
    
})

it(' 5-(3)-2',function(){
    var formula = FormulaParser.build(' 5-(3)-2');
    console.log(formula.toString(),formula.toVal());
    expect(formula.toVal()).toBe(0);
    
})

it(' 5-((3)-2)',function(){
    var formula = FormulaParser.build('5-((3)-2)');
    console.log(formula.toString(),formula.toVal());
    expect(formula.toVal()).toBe(4);
    
})

it(' (5-3)*2',function(){
    var formula = FormulaParser.build(' (5-3)*2');
    console.log(formula.toString(),formula.toVal());
    expect(formula.toVal()).toBe(4);
    
})