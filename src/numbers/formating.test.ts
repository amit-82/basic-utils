import { formatAllNumbericValuesInObject, formatNumber, isNumber } from './formating';

describe('Test formatAllNumbericValuesInObject', () => {
  test('format all numeric value in object to new "[field]_formatted" field correctly', () => {
    expect(formatAllNumbericValuesInObject({ name: 'amit', age: 39, money: 1020000 })).toEqual({
      name: 'amit',
      age: 39,
      age_formatted: '39',
      money: 1020000,
      money_formatted: '1.02M',
    });
  });
});

describe('Test formatNumber', () => {
  test('format numbers', () => {
    expect(formatNumber(1000000)).toBe('1M');
  });
  test("don't format non numeric", () => {
    expect(formatNumber('bla')).toBe('bla');
    expect(formatNumber('bla', false)).toBe('NaN');
  });
});

describe('Test isNumber', () => {
  test('number are numbers', () => {
    expect(isNumber(5)).toBeTruthy();
    expect(isNumber(-5)).toBeTruthy();
    expect(isNumber(0)).toBeTruthy();
    expect(isNumber(5.2)).toBeTruthy();
    expect(isNumber(-5.2)).toBeTruthy();
    expect(isNumber(5.2)).toBeTruthy();
  });

  test('numeric strings are numbers', () => {
    expect(isNumber('5')).toBeTruthy();
    expect(isNumber('-5')).toBeTruthy();
    expect(isNumber('0')).toBeTruthy();
    expect(isNumber('5.2')).toBeTruthy();
    expect(isNumber('-5.2')).toBeTruthy();
    expect(isNumber('5.2')).toBeTruthy();
  });

  test('not numeric strings are numbers', () => {
    expect(isNumber('amit')).toBeFalsy();
    expect(isNumber('')).toBeFalsy();
    expect(isNumber('age 5')).toBeFalsy();
    expect(isNumber('5 age')).toBeFalsy();
  });
});
