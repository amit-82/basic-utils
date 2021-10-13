export const EmptyArray = Object.freeze([]);

export function removeFromArray<T>(item: T, array: T[]) {
  const i = array.indexOf(item);
  if (i > -1) {
    array.splice(i, 1);
  }

  return array;
}
