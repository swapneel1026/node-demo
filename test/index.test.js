const { add , multiply } = require('../index');

test('adds 2 + 3', () => {
    expect(add(2, 3)).toBe(5);
});

test('multiply 2 * 3', () => {
    expect(multiply(2, 3)).toBe(6);
});
