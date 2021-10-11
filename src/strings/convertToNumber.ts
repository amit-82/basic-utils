import { nonNumericMinusDot } from './regs';

// when converting to number - will divide by 100. so 100 equals 1
export const convertStringToNumberAndDivideBy100 = (string: string, percision: number = 2) => {
  //percision -= 1;
  return Math.round(Number(string.replace(nonNumericMinusDot, '')) * 10 ** percision) / 10 ** (percision + 2);
};
