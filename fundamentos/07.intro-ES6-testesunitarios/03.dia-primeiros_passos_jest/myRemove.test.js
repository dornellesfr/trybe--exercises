const myRemove = require('./myRemove');

test('testing myRemove array 1...4 removing 3 return the array expected', () => {
  const arr = [1, 2, 3, 4, 5];
  const num = 3;
  expect(myRemove(arr, num)).toBe([1, 2, 4, 5]);
});