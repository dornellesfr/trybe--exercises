const myFizzBuzz = require('./myFizzBuzz');

describe('Testing myFizzBuzz', () => {
  test('require 01', () => {
    expect(myFizzBuzz(15)).toMatch(/fizzbuzz/);
  });
  test('require 02', () => {
    expect(myFizzBuzz(9)).toMatch(/fizz/);
  });
  test('require 03', () => {
    expect(myFizzBuzz(10)).toMatch(/buzz/);
  });
  test('require 04', () => {
    expect(myFizzBuzz(7)).toEqual(7);
  });
  test('require 05', () => {
    expect(myFizzBuzz('0')).toBeFalsy();
  });
});