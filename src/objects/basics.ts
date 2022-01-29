export type UnknownObject = Record<string | number | symbol, unknown>;
export type StringNumberObject = string | number | UnknownObject;

export function getGlobalScope() {
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  return undefined;
}

export function isObject(target: unknown) {
  return !!target && typeof target === 'object' && !Array.isArray(target);
}

export function getNestedValueByKey(target: UnknownObject | null | undefined, key: string): any {
  if (target === null || target === undefined) {
    return;
  }

  if (key.includes('.')) {
    // looking for nested value
    const subObjectKey = key.slice(0, key.indexOf('.'));
    const nextKey = key.slice(key.indexOf('.') + 1);
    const subObject = target[subObjectKey];
    if (isObject(subObject)) {
      return getNestedValueByKey(subObject as UnknownObject, nextKey);
    }
  }

  return target[key];
}
