/* eslint-disable */
const capitalize = require('./capitalize');

it('returns a string', () => {
  expect(typeof capitalize('thais')).toBe('string');
});

it('returns a capitalized string (1)', () => {
  expect(capitalize('thais')).toBe('Thais');
});

it('returns a capitalized string (2)', () => {
  expect(capitalize('sarah')).toBe('Sarah');
});
