import { createQueue } from './QueuedFunctions';
import { delay } from '../time';

// TODO:

describe.skip('Test QueuedFunctions', () => {
  const CAPACITY = 3;
  const COOLDOWN = 1000;

  const nonFuncs = [{}, 'notFunc', 5, []];

  test.each(nonFuncs)('Should throw for %p because it is not a Function', (item) => {
    const que = createQueue(CAPACITY, COOLDOWN);
    expect(() => que.push(item as unknown as Function)).toThrow();
  });

  test('Should execute all actions without delay as long as they dont surpass the capacity', () => {
    const que = createQueue(CAPACITY, COOLDOWN);

    let counter = 0;
    const addToCounter = () => ++counter;

    for (let i = 0; i < CAPACITY + 1; i++) {
      que.push(addToCounter);
    }

    expect(counter).toBe(CAPACITY);
  });

  test.skip('Should execute pending actions after cooldown', async () => {
    const que = createQueue(CAPACITY, COOLDOWN);

    let counter = 0;
    const addToCounter = () => ++counter;
    const ROUNDS = 3;

    for (let i = 0; i < CAPACITY * ROUNDS; i++) {
      que.push(addToCounter);
    }

    expect(counter).toBe(CAPACITY);

    await delay(COOLDOWN * 1.5);
    expect(counter).toBe(CAPACITY * 2);

    await delay(COOLDOWN * 1.5);
    expect(counter).toBe(CAPACITY * 3);

    await delay(COOLDOWN * 1.5);
    expect(counter).toBe(CAPACITY * 3);
  });
});
