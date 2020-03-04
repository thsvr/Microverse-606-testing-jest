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

it ('return the average of given parameter(1)' , () => {
  expect(arrayAnalysis([1,2,3,4]).average).toBe(2.5)
});

it ('return the average of given parameter(2)' , () => {
  expect(arrayAnalysis([10, 20]).average).toBe(15)
});

it('the returned object has a min property', () => {
  expect(arrayAnalysis([1,2,3,4]).min).toBeDefined();
});

it('the min value is a number', () => {
  expect(typeof arrayAnalysis([1,2,3,4]).min).toBe('number');
});

it ('return the minimum value of given array(1)' , () => {
  expect(arrayAnalysis([10, 20]).min).toBe(10)
});

it ('return the minimum value of given array(2)' , () => {
  expect(arrayAnalysis([1,2,3,4]).min).toBe(1)
});

it('the returned object has a max property', () => {
  expect(arrayAnalysis([1,2,3,4]).max).toBeDefined();
});

it('the max value is a number', () => {
  expect(typeof arrayAnalysis([1,2,3,4]).max).toBe('number');
});

it ('return the maximum value of given array(1)' , () => {
  expect(arrayAnalysis([10, 20]).max).toBe(20)
});

it ('return the maximum value of given array(2)' , () => {
  expect(arrayAnalysis([1,2,3,4]).max).toBe(4)
});

it('the returned object has a length property', () => {
  expect(arrayAnalysis([1,2,3,4]).length).toBeDefined();
});

it('the length value is a number', () => {
  expect(typeof arrayAnalysis([1,2,3,4]).length).toBe('number');
});

it ('return the length of given array(1)' , () => {
  expect(arrayAnalysis([10, 20]).length).toBe(2)
});

it ('return the length of given array(2)' , () => {
  expect(arrayAnalysis([1,2,3,4]).length).toBe(4)
});

