type Month =
  | 'january'
  | 'february'
  | 'march'
  | 'april'
  | 'may'
  | 'june'
  | 'july'
  | 'august'
  | 'september'
  | 'october'
  | 'november'
  | 'december';
type ShortMonth = 'jan' | 'feb' | 'mar' | 'apr' | 'may' | 'jun' | 'jul' | 'aug' | 'sep' | 'oct' | 'nov' | 'dec';

const MONTH_TO_NUMBER = Object.freeze({
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
} as Record<Month | ShortMonth, number>);

/**
 * converts a string like "january 06, 2020" or "Jan 06, 2020" to "2020-01-06". months start at 1.
 * @param str
 * @param januaryValue defaults to 1 (january will be "01"), if 0 january will be "00"
 * @returns
 */
export function converNamedMonthDate(str: string, januaryValue = 1) {
  const parts = str.toLowerCase().replace(',', '').split(' ');
  const monthNumber = MONTH_TO_NUMBER[parts[0] as Month];
  if (monthNumber === undefined) {
    throw `invalid month "${parts[0]}"`;
  }

  const monthStr = (monthNumber + januaryValue).toString().padStart(2, '0');
  return `${parts[2]}-${monthStr}-${parts[1].padStart(2, '0')}`;
}

// 9/15/2021
export function rearrangeFromAmericanFormat(original: string, dilimiter = '/', offestMonthBy = -1) {
  let parts = original.split(dilimiter);
  if (offestMonthBy != 0) {
    parts[0] = (+parts[0] + offestMonthBy).toString();
  }
  parts = parts.map((num) => num.padStart(2, '0'));
  return `${parts[2]}-${parts[0]}-${parts[1]}`;
}
