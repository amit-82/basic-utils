import { formattedNumber } from '../strings/prettyNumber';

export const isNumber = (source: unknown) => source !== '' && !Number.isNaN(Number(source));

export const formatNumber = (source: unknown, checkIsNumber = true) => {
  if (checkIsNumber && !isNumber(source)) {
    return source;
  }
  return formattedNumber(Number(source), true);
};

export const formatAllNumbericValuesInObject = <T>(target: T) => {
  const clone: T = { ...target } as T;
  Object.entries(target).forEach(([key, value]) => {
    if (isNumber(value)) {
      // @ts-ignore
      clone[`${key}_formatted`] = formatNumber(value, false);
    }
  });
  return clone;
};
