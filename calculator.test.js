const calculator = require('./calculator');

it('is an object', () => {
  expect(typeof calculator).toBe('object');
});

describe('Calculator addition method', () => {
  it('exists', () => {
    expect(calculator.add).toBeDefined();
  });

  it('=returns a number', () => {
    expect(typeof calculator.add(2, 1)).toBe('number');
  });

  it('returns the sum of two parameters(1)', () => {
    expect(calculator.add(2, 1)).toBe(3);
  });

  it('returns the sum of two parameters(2)', () => {
    expect(calculator.add(60, 12)).toBe(72);
  });

  it('returns the sum of two or more parameters', () => {
    expect(calculator.add(60, 12, 5)).toBe(77);
  });
});

describe('Calculator substraction method', () => {
  it('exists', () => {
    expect(calculator.substract).toBeDefined();
  });

  it('returns a number', () => {
    expect(typeof calculator.substract(2, 1)).toBe('number');
  });

  it('returns the substraction of two parameters(1)', () => {
    expect(calculator.substract(2, 1)).toBe(1);
  });
  
  it('returns the substraction of two parameters(2)', () => {
    expect(calculator.substract(5, 10)).toBe(-5);
  });

  it('returns the substraction of two or more parameters', () => {
    expect(calculator.substract(60, 12, 5)).toBe(43);
  });
});

it('has a division method', () => {
  expect(calculator.divide).toBeDefined();
});

it('has a multiplication method', () => {
  expect(calculator.multiply).toBeDefined();
});