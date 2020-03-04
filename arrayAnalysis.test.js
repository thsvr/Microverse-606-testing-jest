/* eslint-disable */
const arrayAnalysis = require('./arrayAnalysis');

it('returns an object', () => {
  expect(typeof arrayAnalysis([1, 2, 3, 4])).toBe('object');
});

describe('Array Analisys returned object average property', () => {
  it('exists', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).average).toBeDefined();
  });

  it('s value is a number', () => {
    expect(typeof arrayAnalysis([1, 2, 3, 4]).average).toBe('number');
  });

  it('is the average of the given parameter(1)', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).average).toBe(2.5);
  });

  it('is the average of given parameter(2)', () => {
    expect(arrayAnalysis([10, 20]).average).toBe(15);
  });
});

describe('Array Analisys returned object min property', () => {
  it('exists', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).min).toBeDefined();
  });

  it('s value is a number', () => {
    expect(typeof arrayAnalysis([1, 2, 3, 4]).min).toBe('number');
  });

  it('is the min of the given parameter(1)', () => {
    expect(arrayAnalysis([10, 20]).min).toBe(10);
  });

  it('is the min of the given parameter(2)', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).min).toBe(1);
  });
});

describe('Array Analisys returned object max property', () => {
  it('exists', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).max).toBeDefined();
  });

  it('s value is a number', () => {
    expect(typeof arrayAnalysis([1, 2, 3, 4]).max).toBe('number');
  });

  it('is the max of the given parameter(1)', () => {
    expect(arrayAnalysis([10, 20]).max).toBe(20);
  });

  it('is the max of the given parameter(2)', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).max).toBe(4);
  });
});

describe('Array Analisys returned object length property', () => {
  it('exists', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).length).toBeDefined();
  });

  it('s value is a number', () => {
    expect(typeof arrayAnalysis([1, 2, 3, 4]).length).toBe('number');
  });

  it('is the lenght of the given parameter(1)', () => {
    expect(arrayAnalysis([10, 20]).length).toBe(2);
  });

  it('is the lenght of the given parameter(2)', () => {
    expect(arrayAnalysis([1, 2, 3, 4]).length).toBe(4);
  });
});
