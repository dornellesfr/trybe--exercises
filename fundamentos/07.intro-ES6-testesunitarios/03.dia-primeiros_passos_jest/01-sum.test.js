const sum = require('./01-sum.js')

describe('Require 01', () => {
  it('Sum 4 and 5 returns 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
  it('Sum 0 and 0 returns 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('Sum 4 and "5" returns erro', () => {
    expect(() => sum()).toThrow();
  });
});