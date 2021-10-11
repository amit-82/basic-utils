import { converNamedMonthDate, rearrangeFromAmericanFormat } from '../../src/strings/stringToDate';

describe('Testing rearrangeFromAmericanFormat', () => {
  test('convert cases', () => {
    expect(rearrangeFromAmericanFormat('12/28/2020')).toBe('2020-11-28');
    expect(rearrangeFromAmericanFormat('1.16.1982', '.')).toBe('1982-00-16');
    expect(rearrangeFromAmericanFormat('0/1/1982', '/', 0)).toBe('1982-00-01');
    expect(rearrangeFromAmericanFormat('11/29/1982', '/', 0)).toBe('1982-11-29');
  });
});

describe('Testing converNamedMonthDate', () => {
  test('return correct dates with default january value (0)', () => {
    expect(converNamedMonthDate('January 16, 1982')).toBe('1982-00-16');
    expect(converNamedMonthDate('Jan 18, 1982')).toBe('1982-00-18');
    expect(converNamedMonthDate('February 3, 2011')).toBe('2011-01-03');
    expect(converNamedMonthDate('Feb 03, 2011')).toBe('2011-01-03');
  });

  test('return correct dates with january is 1', () => {
    expect(converNamedMonthDate('march 16, 1982', 1)).toBe('1982-03-16');
    expect(converNamedMonthDate('Mar 18, 1982', 1)).toBe('1982-03-18');
    expect(converNamedMonthDate('april 3, 2011', 1)).toBe('2011-04-03');
    expect(converNamedMonthDate('december 03, 2011', 1)).toBe('2011-12-03');
  });

  test('invalid month should throw an error', () => {
    expect(() => converNamedMonthDate('fdsfsd 16, 1982')).toThrow('invalid month "fdsfsd"');
  });
});
