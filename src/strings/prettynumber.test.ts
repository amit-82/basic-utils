import { formattedNumber } from './prettyNumber';

describe('texting formattedNumber', () => {
  test('check thounsads', () => {
    expect(formattedNumber(1000)).toBe('1,000');
    expect(formattedNumber(1234.234)).toBe('1,234.23');
    expect(formattedNumber(1234.23, false, true)).toBe('1.23K');
    expect(formattedNumber(1000, false, true)).toBe('1K');
  });

  test('check default without formatting millions', () => {
    expect(formattedNumber(1000000)).toBe('1,000,000');
    expect(formattedNumber(84562890.2345)).toBe('84,562,890.23');
  });

  test('check millions', () => {
    expect(formattedNumber(1000000, true)).toBe('1M');
    expect(formattedNumber(84562890, true)).toBe('84.56M');
  });

  test('check millions and rounding correctly', () => {
    expect(formattedNumber(84567890, true)).toBe('84.57M');
  });

  test('check billions', () => {
    expect(formattedNumber(1000000000)).toBe('1B');
    expect(formattedNumber(18454289084)).toBe('18.45B');
  });

  test('check trillions', () => {
    expect(formattedNumber(1000000000000)).toBe('1T');
    expect(formattedNumber(1845428908400)).toBe('1.85T');
    expect(formattedNumber(1845428908400, true, true, 3)).toBe('1.845T');
  });

  test('test string input', () => {
    expect(formattedNumber('1000000000')).toBe('1B');
    expect(formattedNumber('18454289084')).toBe('18.45B');
  });
});
