const myRemove = require('./02-myRemove');

describe('Tests using myRemove to return a array without the second parameter', () => {
  test('returns of array [1, 2, 4, 5] = [1, 2, 4, 5]', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(myRemove(arr, 3)).toEqual([1, 2, 4, 5]);
  });
  test('returns of array [1, 2, 3, 4] != [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test('returns of array [1, 2, 3, 4] = [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
