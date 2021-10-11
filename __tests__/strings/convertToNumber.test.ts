import { convertStringToNumberAndDivideBy100 } from '../../src/strings/convertToNumber';

test('Test convertStringToNumberAndDivideBy100', () => {
  expect(convertStringToNumberAndDivideBy100('5.12')).toBe(0.0512); // default with precision 2
  expect(convertStringToNumberAndDivideBy100('5.123', 2)).toBe(0.0512);
  expect(convertStringToNumberAndDivideBy100('5.125', 2)).toBe(0.0513);
  expect(convertStringToNumberAndDivideBy100('5.125', 3)).toBe(0.05125);
  expect(convertStringToNumberAndDivideBy100('5.125', 1)).toBe(0.051);
  expect(convertStringToNumberAndDivideBy100('85.125', 0)).toBe(0.85);
});
