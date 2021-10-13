import { isObject, getNestedValueByKey } from './basics';

describe('Test isObject', () => {
  // are objects
  test('object is object', () => {
    expect(isObject({})).toBeTruthy();
  });

  test('Date is object', () => {
    expect(new Date()).toBeTruthy();
  });

  // not objects
  test('Array is not object', () => {
    expect(isObject([])).toBeFalsy();
  });

  test('Null is not object', () => {
    expect(isObject(null)).toBeFalsy();
  });

  test('undefined is not object', () => {
    expect(isObject(undefined)).toBeFalsy();
  });

  test('number, string and symbol are not object', () => {
    expect(isObject(5)).toBeFalsy();
    expect(isObject('hello')).toBeFalsy();
    expect(isObject(Symbol())).toBeFalsy();
  });
});

describe('test getNestedValueByKey', () => {
  const subject = { name: 'luke', father: { name: 'darth vader', birth: { planet: 'Tatooine' } } };

  test('get values in object', () => {
    expect(getNestedValueByKey(subject, 'name')).toBe(subject.name);
    expect(getNestedValueByKey(subject, 'father.name')).toBe(subject.father.name);
    expect(getNestedValueByKey(subject, 'father.birth.planet')).toBe(subject.father.birth.planet);
  });

  test('return undefined when key or source is missing', () => {
    expect(getNestedValueByKey(null, 'mother.name')).toBeUndefined();
    expect(getNestedValueByKey(undefined, 'mother.name')).toBeUndefined();
    expect(getNestedValueByKey(subject, 'mother.name')).toBeUndefined();
  });
});
