const {encode, decode}= require('./04-encode-decode');

describe('testint encode and decode', () => {
  test('is encode a function?', () => {
    expect(encode('aa')).toBe('11');
  });
  test('is decode a function?', () => {
    expect(decode('11')).toBe('aa');
  });
  test('a, e, i, o, u returns 1, 2, 3, 4, 5', () => {
    expect(encode('a, e, i, o, u')).toBe('1, 2, 3, 4, 5');
  })
  test('1, 2, 3, 4, 5 returns a, e, i, o, u', () => {
    expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u');
  })
  test('All others letters are not converted - encod', () => {
    expect(encode('q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, ç, z, x, c, v, b, n, m')).toBe('q, w, 2, r, t, y, 5, 3, 4, p, 1, s, d, f, g, h, j, k, l, ç, z, x, c, v, b, n, m');
  });
  test('All others numbers are not converted - decode', () => {
    expect(decode('1, 2, 3, 4, 5, 6, 7, 8, 9')).toBe('a, e, i, o, u, 6, 7, 8, 9');
  });
  test('if the length is the same - encode', () => {
    expect(encode('aeiou12345')).toHaveLength(10);
  });
  test('if the length is the same - decode', () => {
    expect(decode('aeiou12345')).toHaveLength(10);
  });
});