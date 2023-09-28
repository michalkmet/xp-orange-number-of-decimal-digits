const digits = require('./digits');

describe('Story1: 1 digit numbers', () => {
  it('UAT1.1: When I pass 0, then I should see 1', () => {
    expect(digits(0)).toBe(1);
  });
});
