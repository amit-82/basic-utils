import { createQueue } from './QueuedFunctions';
import triggeredAsync from './triggeredAsync';
import { asyncDelay } from '../time';

describe.skip('Test triggeredAsync in QueuedFunctions', () => {
  const CAPACITY = 3;
  const COOLDOWN = 500;
  const TRIGGER_DELAY = 60;
  const TRIGGER_DELAY_PLUS = 100;

  test('Should not call triggeredAsync from QueuedFunctions before cooldown', async () => {
    const que = createQueue(CAPACITY, COOLDOWN);
    let call_counter = 0;
    let counter = 0;
    const addToCounter = async () => {
      ++call_counter;
      await asyncDelay(TRIGGER_DELAY);
      ++counter;
    };

    const { trigger: trigger1 } = triggeredAsync(addToCounter);
    const { trigger: trigger2 } = triggeredAsync(addToCounter);
    const { trigger: trigger3 } = triggeredAsync(addToCounter);
    const { trigger: trigger4 } = triggeredAsync(addToCounter);
    const { trigger: trigger5 } = triggeredAsync(addToCounter);
    const { trigger: trigger6 } = triggeredAsync(addToCounter);
    const { trigger: trigger7 } = triggeredAsync(addToCounter);
    que.push(trigger1);
    que.push(trigger2);
    que.push(trigger3);
    que.push(trigger4);
    que.push(trigger5);
    que.push(trigger6);
    que.push(trigger7);

    expect(call_counter).toBe(3);
    expect(counter).toBe(0);

    await asyncDelay(TRIGGER_DELAY_PLUS);
    expect(call_counter).toBe(3);
    expect(counter).toBe(3);

    await asyncDelay(COOLDOWN);
    expect(call_counter).toBe(6);
    expect(counter).toBe(6);

    await asyncDelay(COOLDOWN * 0.9);
    expect(counter).toBe(6);

    await asyncDelay(COOLDOWN * 0.2 + TRIGGER_DELAY_PLUS);
    expect(counter).toBe(7);
  });

  test('Should call triggeredAsync from QueuedFunctions', async () => {
    const que = createQueue(CAPACITY, COOLDOWN);
    let counter = 0;
    const addToCounter = async () => {
      await asyncDelay(TRIGGER_DELAY);
      ++counter;
    };

    const { trigger: trigger1 } = triggeredAsync(addToCounter);
    const { trigger: trigger2 } = triggeredAsync(addToCounter);
    const { trigger: trigger3 } = triggeredAsync(addToCounter);
    const { trigger: trigger4 } = triggeredAsync(addToCounter);
    const { trigger: trigger5 } = triggeredAsync(addToCounter);
    const { trigger: trigger6 } = triggeredAsync(addToCounter);
    const { trigger: trigger7 } = triggeredAsync(addToCounter);
    que.push(trigger1);
    que.push(trigger2);

    await asyncDelay(TRIGGER_DELAY * 0.8);
    expect(counter).toBe(0);

    que.push(trigger3);
    que.push(trigger4);
    que.push(trigger5);
    que.push(trigger6);
    que.push(trigger7);

    await asyncDelay(TRIGGER_DELAY * 0.3);
    expect(counter).toBe(2);
    await asyncDelay(TRIGGER_DELAY * 0.5);
    expect(counter).toBe(3);
    await asyncDelay(COOLDOWN + TRIGGER_DELAY);
    expect(counter).toBe(6);
    await asyncDelay(COOLDOWN);
    expect(counter).toBe(7);
  });
});
