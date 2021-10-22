import { converNamedMonthDate, rearrangeFromAmericanFormat } from './stringToDate';

describe('Testing rearrangeFromAmericanFormat', () => {
  test('convert cases', () => {
    expect(rearrangeFromAmericanFormat('12/28/2020')).toBe('2020-12-28');
    expect(rearrangeFromAmericanFormat('1.16.1982', '.')).toBe('1982-01-16');
    expect(rearrangeFromAmericanFormat('1/1/1982', '/', -1)).toBe('1982-00-01');
    expect(rearrangeFromAmericanFormat('12/29/1982', '/', -1)).toBe('1982-11-29');
  });
});

describe('Testing converNamedMonthDate', () => {
  test('return correct dates with default january value (0)', () => {
    expect(converNamedMonthDate('January 16, 1982')).toBe('1982-01-16');
    expect(converNamedMonthDate('Jan 18, 1982')).toBe('1982-01-18');
    expect(converNamedMonthDate('February 3, 2011')).toBe('2011-02-03');
    expect(converNamedMonthDate('Feb 03, 2011')).toBe('2011-02-03');
  });

  test('return correct dates with january is 0', () => {
    expect(converNamedMonthDate('jan 16, 1982', 0)).toBe('1982-00-16');
    expect(converNamedMonthDate('march 16, 1982', 0)).toBe('1982-02-16');
    expect(converNamedMonthDate('Mar 18, 1982', 0)).toBe('1982-02-18');
    expect(converNamedMonthDate('april 3, 2011', 0)).toBe('2011-03-03');
    expect(converNamedMonthDate('december 03, 2011', 0)).toBe('2011-11-03');
  });

  test('invalid month should throw an error', () => {
    expect(() => converNamedMonthDate('fdsfsd 16, 1982')).toThrow('invalid month "fdsfsd"');
  });
});
