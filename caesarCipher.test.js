/* eslint-disable */
const caesarCipher = require('./caesarCipher');

const message = 'secret message';

const capitalizedMessage = 'Secret Message';

it('is a function', () => {
  expect(typeof caesarCipher).toBe('function');
});

it('returns a string', () => {
  expect(typeof caesarCipher(message)).toBe('string');
});

it('returns a string of the same length as the string given as parameter', () => {
  expect(caesarCipher(message).length).toBe(message.length);
});

it('returns an encrypted string with the alphabet offset defined by a key parameter(1)', () => {
  expect(caesarCipher('secret', 1)).toBe('tfdsfu');
});

it('returns an encrypted string with the alphabet offset defined by a key parameter(2)', () => {
  expect(caesarCipher('zecret', 1)).toBe('afdsfu');
});

it('returns an encrypted string with the alphabet offset defined by a key parameter(3)', () => {
  expect(caesarCipher('zyxwvut', 7)).toBe('gfedcba');
});

it('returns an encrypted string including spaces', () => {
  expect(caesarCipher(message, 1)).toBe('tfdsfu nfttbhf');
});

it('returns an encrypted string including pontuation(1)', () => {
  expect(caesarCipher(`${message}!`, 1)).toBe('tfdsfu nfttbhf!');
});

it('returns an encrypted string including pontuation(2)', () => {
  expect(caesarCipher(`${message}.`, 1)).toBe('tfdsfu nfttbhf.');
});

it('returns an encrypted string including pontuation(3)', () => {
  expect(caesarCipher(`${message}?`, 1)).toBe('tfdsfu nfttbhf?');
});

it('returns an encrypted string including pontuation(4)', () => {
  expect(caesarCipher('secret, message', 1)).toBe('tfdsfu, nfttbhf');
});

it('returns an encrypted string keeping capitalization', () => {
  expect(caesarCipher(capitalizedMessage, 1)).toBe('Tfdsfu Nfttbhf');
});
