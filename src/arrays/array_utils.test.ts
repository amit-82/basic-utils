import { removeFromArray } from './array_utils';

describe('Testing removeFromArray', () => {
  interface Item {
    x: number;
  }

  const item1: Item = { x: 1 };
  const item2: Item = { x: 2 };
  const item3: Item = { x: 3 };
  const item4: Item = { x: 4 };
  let arr: Item[];

  const originalArr = [item1, item2, item3, item2, item4, item2];

  beforeEach(() => {
    arr = [...originalArr];
  });

  test('will not change if removed item not in array', () => {
    const originalLength = arr.length;
    expect(removeFromArray({ x: 666 }, arr)).toEqual(arr);
  });

  test('will remove provided item from array', () => {
    expect(arr.indexOf(item3)).toEqual(2);
    expect(removeFromArray(item3, arr)).toEqual([item1, item2, item2, item4, item2]);
  });

  test('will remove provided item from array once (default remove will not remove all instances)', () => {
    expect(removeFromArray(item2, arr)).toEqual([item1, item3, item2, item4, item2]);
  });
});
