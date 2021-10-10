const numberFormat = new Intl.NumberFormat('en-US');

export const formattedNumberfactory =
  (millions = false, kilos = false, precision = 2) =>
  (num: number) =>
    formattedNumber(num, millions, kilos, precision);

export const formattedNumber = (num: number, millions = false, kilos = false, precision = 2): string => {
  let sufix = '';
  let divider = 1;

  if (num > 1000000000000) {
    // trillion
    sufix = 'T';
    divider = 1000000000000;
  } else if (num > 1000000000) {
    // billion
    sufix = 'B';
    divider = 1000000000;
  } else if (millions && num > 1000000) {
    // million
    sufix = 'M';
    divider = 1000000;
  } else if (kilos && num > 1000) {
    // thousand
    sufix = 'K';
    divider = 1000;
  }

  num = Number((num / divider).toFixed(precision));
  return numberFormat.format(num) + sufix;
};
