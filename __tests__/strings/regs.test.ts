import { nonNumeric, nonNumericMinusDot } from '../../src/strings/regs';

describe('Test someNonNumeric RegExp', () => {
  test('someNonNumeric find strings with non numeric chars (including minus and dots)', () => {
    expect(nonNumeric.test('123')).toBeFalsy();
    expect(nonNumeric.test('12d3')).toBeTruthy();
  });

  test('someNonNumeric find and replace replaces all non numeric (including minus and dots)', () => {
    expect("I'm 26 years old".replace(nonNumeric, '')).toBe('26');
    expect("I'm 26.5 years old".replace(nonNumeric, '')).toBe('265');
  });
});

describe('Test someNonNumericMinusDot RegExp', () => {
  test('someNonNumericMinusDot find strings with non numeric chars (including minus and dots)', () => {
    expect(nonNumericMinusDot.test('123')).toBeFalsy();
    expect(nonNumericMinusDot.test('-123.5')).toBeFalsy();
    expect(nonNumericMinusDot.test('-12d3.5')).toBeTruthy();
  });

  test('someNonNumericMinusDot find and replace replaces all non numeric (including minus and dots)', () => {
    expect("I'm 26 years old".replace(nonNumericMinusDot, '')).toBe('26');
    expect("I'm 26.5 years old".replace(nonNumericMinusDot, '')).toBe('26.5');
    expect('My balance is -126.5 dollars'.replace(nonNumericMinusDot, '')).toBe('-126.5');
  });
});
