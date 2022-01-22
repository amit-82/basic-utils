import triggeredAsync from './triggeredAsync';
import { asyncDelay } from '../time';

describe('Test triggeredAsync', () => {
  test('Should invoke async function when executing trigger', async () => {
    const ASYNC_TARGET_DELAY = 50;
    const ASYNC_TARGET_RESULT = 666;

    let asyncCalled = false;
    let asyncExecuted = false;

    const asyncTargetFunc = async () => {
      asyncCalled = true;
      await asyncDelay(ASYNC_TARGET_DELAY);
      asyncExecuted = true;
      return ASYNC_TARGET_RESULT;
    };

    const { promise, trigger } = triggeredAsync(asyncTargetFunc);

    promise.then((res) => {
      expect(res).toBe(ASYNC_TARGET_RESULT);
    });

    await asyncDelay(ASYNC_TARGET_DELAY + 10);

    expect(asyncCalled).toBeFalsy();
    expect(asyncExecuted).toBeFalsy();

    trigger();

    expect(asyncCalled).toBeTruthy();
    expect(asyncExecuted).toBeFalsy();

    await asyncDelay(ASYNC_TARGET_DELAY + 10);

    expect(asyncCalled).toBeTruthy();
    expect(asyncExecuted).toBeTruthy();
  });
});
