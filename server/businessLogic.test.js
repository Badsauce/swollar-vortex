import { computeMatchedList } from './businessLogic'

test('matches compute correctly', () => {
    const list1 = [{name: 'pandas', selected: 'yes'},{name: 'cats', selected: 'yes'}]
    const list2 = [{name: 'pandas', selected: 'yes'},{name: 'cats', selected: 'no'}]
    expect(computeMatchedList({list1, list2})).toEqual([{name: 'pandas', selected: 'yes'}])
})