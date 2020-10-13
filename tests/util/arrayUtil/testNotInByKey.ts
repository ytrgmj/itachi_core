import {ArrayUtil} from '../../../src/util/ArrayUtil'
test('测试',function(){

    var id1 = [
        {id: 1, name: 'aaa'},
        {id: 2, name: 'aaa1'},
        {id: 3, name: 'aaa2'},
        {id: 4, name: 'aaa3'},
        {id: 5, name: 'aaa'},
        {id: 6, name: 'aaa'}
    ]
    var id2 = [
        {id: 5, name: 'aaa'},
        {id: 2, name: 'aaa1'},
        {id: 3, name: 'bbb2'},
        {id: 4, name: 'bbb3'}
    ]

    var id3 = [
        {id1: 5, name: 'aaa'},
        {id1: 2, name: 'aaa1'},
        {id1: 3, name: 'bbb2'},
        {id1: 4, name: 'bbb3'}
    ]
    expect(ArrayUtil.notInByKey(id1, id2, 'name').length).toBe(2)
    expect(ArrayUtil.notInByKey(id1, id2, function (data) {
    return data.id + '_' + data.name
    }).length).toBe(4)

    expect(ArrayUtil.notInByKey(id1, id3, 'id', 'id1').length).toBe(2)
    expect(ArrayUtil.notInByKey(id1, id2, ['id', 'name']).length).toBe(4)
});