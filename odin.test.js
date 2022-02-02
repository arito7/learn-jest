const odin = require('./odin');
const capitalize = odin.capitalize;

test('capitalize first letter', () => {
  expect(capitalize('john')).toBe('John');
});

const reverseString = odin.reverseString;

test('reverse string', () => {
  expect(reverseString('john')).toBe('nhoj');
});

const calculator = odin.calculator;

test('calculator add', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculator subtract', () => {
  expect(calculator.subtract(4, 1)).toBe(3);
});

test('calculator divide', () => {
  expect(calculator.divide(9, 3)).toBe(3);
});

test('calculator multiply', () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

const caesarCipher = odin.caesarCipher;

test('caesar cipher basic', () => {
  expect(caesarCipher('apple', 2)).toBe('crrng');
});

test('caesar cipher z', () => {
  expect(caesarCipher('zyzz', 6)).toBe('feff');
});

test('caesar cipher case', () => {
  expect(caesarCipher('BananA', 6)).toBe('HgtgtG');
});

test('caesar cipher puncutation', () => {
  expect(caesarCipher('I am an, apple', 6)).toBe('O gs gt, gvvrk');
});

const analyzeArray = odin.analyzeArray;

test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
