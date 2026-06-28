const sum = require('./math');

test('1 cộng 2 phải bằng 3', () => {
    expect(sum(1, 2)).toBe(3);
});