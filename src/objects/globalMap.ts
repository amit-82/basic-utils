import { getGlobalScope } from './basics';

type StrNumSym = string | number | Symbol;

const g = getGlobalScope() as any;
const vauletKey = Symbol('singletonVaulet');
const map = new Map<StrNumSym, any>();
g[vauletKey] = map;

export function setGlobal<T>(key: StrNumSym, value: T, override = false, throwIfTaken = true): T {
  if (map.has(key)) {
    if (override) {
      map.set(key, value);
    } else if (throwIfTaken) {
      throw `singleton: key "${key}" already exists in map`;
    }
  } else {
    map.set(key, value);
  }

  return map.get(key);
}

export const getGlobal = <T>(key: StrNumSym) => map.get(key) as T;

export const clearGlobal = () => {
  map.clear();
};

export const deleteGlobal = <T>(key: StrNumSym) => {
  const val = map.get(key);
  map.delete(key);
  return val as T | undefined;
};
