const fatorial = require('./fatorial');

test('fatorial de 5 deve ser 120', () => {
    expect(fatorial(5)).toBe(120);
});

test('fatorial de 1 deve ser 1', () => {
    expect(fatorial(1)).toBe(1);
});

test('fatorial de 0 deve ser 1', () => {
    expect(fatorial(0)).toBe(1);
});