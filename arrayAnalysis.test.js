const arrayAnalysis = require('./arrayAnalysis');

it('returns an object', () => {
  expect(typeof arrayAnalysis([1,2,3,4])).toBe('object');
});

it('the returned object has an average property', () => {
  expect(arrayAnalysis([1,2,3,4]).average).toBeDefined();
});

it('the average value is a number', () => {
  expect(typeof arrayAnalysis([1,2,3,4]).average).toBe('number');
});

it ('return the average of given parameter' , () => {
  expect(arrayAnalysis([1,2,3,4])).toBe(2.5)
});

it('the returned object has a min property', () => {
  expect(arrayAnalysis([1,2,3,4]).min).toBeDefined();
});

it('the min value is a number', () => {
  expect(typeof arrayAnalysis([1,2,3,4]).min).toBe('number');
});

it('the returned object has a max property', () => {
  expect(arrayAnalysis([1,2,3,4]).max).toBeDefined();
});

it('the max value is a number', () => {
  expect(typeof arrayAnalysis([1,2,3,4]).max).toBe('number');
});

it('the returned object has a length property', () => {
  expect(arrayAnalysis([1,2,3,4]).length).toBeDefined();
});

it('the length value is a number', () => {
  expect(typeof arrayAnalysis([1,2,3,4]).length).toBe('number');
});

