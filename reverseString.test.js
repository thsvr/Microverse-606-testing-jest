const reverseString = require('./reverseString');

it('returns a string', () => {
  expect(typeof reverseString('thais')).toBe('string');
});

it('returns the string parameter reversed(1)', () => {
  expect(reverseString('thais')).toBe('siaht');
});

it('returns the string parameter reversed(2)', () => {
  expect(reverseString('sarah')).toBe('haras');
});

it('returns the string parameter reversed and keeps capitalized letteres', () => {
  expect(reverseString('Sarah')).toBe('haraS');
});
