import FormulaParser from '../../../src/formula/parser/FormulaParser'

it('测试5',function(){
    var formula = FormulaParser.build('aaa');
    var param = {}
    formula.parseEsGroupParam(param);
    expect(param).toEqual({field:'aaa'});
})