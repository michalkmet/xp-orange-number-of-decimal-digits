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

describe('Story3: 3 digits numbers', () => {
  it('UAT3.1: When I pass 100, then I should see 3', () => {
    expect(digits(100)).toBe(3);
  });
  it('UAT3.2: When I pass 666, then I should see 3', () => {
    expect(digits(666)).toBe(3);
  });
});

describe('Story4: 4+ digits numbers', () => {
  it('UAT4.1:  When I pass 9999, then I should see 4', () => {
    expect(digits(9999)).toBe(4);
  });
  it('UAT4.2:  When I pass 12345, then I should see 5', () => {
    expect(digits(12345)).toBe(5);
  });
  it('UAT4.3:  When I pass 128685, then I should see 6', () => {
    expect(digits(128685)).toBe(6);
  });
  it('UAT4.4:  When I pass 9876543210, then I should see 10', () => {
    expect(digits(9876543210)).toBe(10);
  });
  it('UAT4.5:  When I pass 9007199254740991, then I should see 16', () => {
    expect(digits(9007199254740991)).toBe(16);
  });
});
