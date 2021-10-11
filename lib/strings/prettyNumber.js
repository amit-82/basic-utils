"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formattedNumber = exports.formattedNumberfactory = void 0;
const numberFormat = new Intl.NumberFormat('en-US');
const formattedNumberfactory = (millions = false, kilos = false, precision = 2) => (num) => (0, exports.formattedNumber)(num, millions, kilos, precision);
exports.formattedNumberfactory = formattedNumberfactory;
const formattedNumber = (num, millions = false, kilos = false, precision = 2) => {
    let sufix = '';
    let divider = 1;
    if (num > 1000000000000) {
        // trillion
        sufix = 'T';
        divider = 1000000000000;
    }
    else if (num > 1000000000) {
        // billion
        sufix = 'B';
        divider = 1000000000;
    }
    else if (millions && num > 1000000) {
        // million
        sufix = 'M';
        divider = 1000000;
    }
    else if (kilos && num > 1000) {
        // thousand
        sufix = 'K';
        divider = 1000;
    }
    num = Number((num / divider).toFixed(precision));
    return numberFormat.format(num) + sufix;
};
exports.formattedNumber = formattedNumber;
