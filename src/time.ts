export const asyncTimeout = async (action: Function, ms: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      action();
      resolve(true);
    }, ms);
  });
};

export const asyncDelay = (ms: number) => asyncTimeout(() => {}, ms);

export const delay = async (ms: number) => asyncTimeout(() => {}, ms);
