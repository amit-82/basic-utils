import { getGlobal, setGlobal, clearGlobal, deleteGlobal } from './globalMap';

type strNumSym = string | number | Symbol;

describe('Test getGlobal and setGlobal', () => {
  test('Should return undefined for getting without setting before', () => {
    expect(getGlobal('xxx')).toBeUndefined();
  });

  type KeyVals = [strNumSym, string | number | {}];
  const keyVals: KeyVals[] = [
    ['xxx', 666],
    [777, {}],
    [Symbol('yyy'), 'symbsymb'],
  ];

  test.each(keyVals)(
    'For test %#, with key %p and value %p should get, set and delete correctly',
    (key: strNumSym, val: any) => {
      let res = setGlobal(key, val);
      expect(res).toBe(val);
      expect(getGlobal(key)).toBe(val);
      res = deleteGlobal(key);
      expect(res).toBe(val);
      expect(getGlobal(key)).toBeUndefined();
    }
  );

  test('Should clear all entries', () => {
    setGlobal('zzz', 456);
    clearGlobal();
    expect(getGlobal('zzz')).toBeUndefined();
  });
});
