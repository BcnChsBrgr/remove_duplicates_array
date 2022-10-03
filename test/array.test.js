const removeArrayDuplicates = require('../index');

test('having test array', () => {
    const array = [1234, 234, 123, 1234];
    let test = new removeArrayDuplicates(array);
    expect(test.toArray()).toBe(array);
});

test('having test array to string', () => {
    const array = [1234, 234, 123, 1234];
    let test = new removeArrayDuplicates(array);
    expect(test.toString()).toBe('1234,234,123,1234');
});

test('having test in string', () => {
    const array = ['AA', 'AB', 'AC', 'AD', 'AB', 'AB'];
    let test = new removeArrayDuplicates(array);
    expect(test.toArray()).toBe(['AA', 'AB', 'AC', 'AD']);
})

test('remove duplicate element', () => {
    const array = [1234, 234, 123, 1234];
    const expected = [1234, 234, 123];
    let test = new removeArrayDuplicates(array);
    expect(test.removeDuplicate()).toStrictEqual(expected);
});

test('remove duplicate object element', () => {
    const array = [{a: 1}, {b: 2}, {c: 3}, {a: 1}];
    const expected = [{a: 1}, {b: 2}, {c: 3}];
    let test = new removeArrayDuplicates(array);
    expect(test.removeDuplicate()).toStrictEqual(expected);
});


test('remove duplicate object element', () => {
    const array = [{a: 1, b: 2}, {b: 2}, {c: 3}, {b:2, a: 1}];
    const expected = [{a: 1, b: 2}, {b: 2}, {c: 3}];
    let test = new removeArrayDuplicates(array);
    expect(test.removeDuplicate()).toStrictEqual(expected);
});