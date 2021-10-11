"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringToNumberAndDivideBy100 = void 0;
const regs_1 = require("./regs");
// when converting to number - will divide by 100. so 100 equals 1
const convertStringToNumberAndDivideBy100 = (string, percision = 2) => {
    //percision -= 1;
    return Math.round(Number(string.replace(regs_1.nonNumericMinusDot, '')) * 10 ** percision) / 10 ** (percision + 2);
};
exports.convertStringToNumberAndDivideBy100 = convertStringToNumberAndDivideBy100;
