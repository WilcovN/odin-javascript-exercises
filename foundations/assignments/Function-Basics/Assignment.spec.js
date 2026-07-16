const values = require('./Assignment')

describe('step 1', () => {
    test('adds 7 to 10', () => {
        expect(values.add7(10)).toEqual(17)
    })
})

describe('step 2', () => {
    test('multiply 3 with 2', () => {
        expect(values.multiply(3,2)).toEqual(6)
    })
})

describe('step 3', () => {
    test('capitilize abcd', () => {
        expect(values.capitilize('abcd')).toEqual('Abcd')
    });
    test('capitilize ABCD', () => {
        expect(values.capitilize('ABCD')).toEqual('Abcd')
    });
    test('capitilize aBcD', () => {
        expect(values.capitilize('aBcD')).toEqual('Abcd')
    });
})

describe('step 4', () => {
    test('last letter of abcd', () => {
        expect(values.lastLetter('abcd')).toEqual('d')
    })
})