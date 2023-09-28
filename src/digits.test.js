const digits = require('./digits');

describe('Story1: 1 digit numbers', () => {
  it('UAT1.1: When I pass 0, then I should see 1', () => {
    expect(digits(0)).toBe(1);
  });
  it('UAT1.2: When I pass 1, then I should see 1', () => {
    expect(digits(1)).toBe(1);
  });
  it('UAT1.3: When I pass 9, then I should see 1', () => {
    expect(digits(9)).toBe(1);
  });
});

describe('Story2: 2 digits numbers', () => {
  it('UAT2.1: When I pass 11, then I should see 2', () => {
    expect(digits(11)).toBe(2);
  });
  it('UAT2.2: When I pass 66, then I should see 2', () => {
    expect(digits(66)).toBe(2);
  });
});
