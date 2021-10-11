/**
 * converts a string like "january 06, 2020" or "Jan 06, 2020" to "2020-00-06". months start at 0.
 * @param str
 * @param januaryValue defaults to 0 (january will be "00"), if 1 january will be "01"
 * @returns
 */
export declare function converNamedMonthDate(str: string, januaryValue?: number): string;
export declare function rearrangeFromAmericanFormat(original: string, dilimiter?: string, offestMonthBy?: number): string;
