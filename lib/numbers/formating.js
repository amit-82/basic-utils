"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatAllNumbericValuesInObject = exports.formatNumber = exports.isNumber = void 0;
const prettyNumber_1 = require("../strings/prettyNumber");
const isNumber = (source) => source !== '' && !Number.isNaN(Number(source));
exports.isNumber = isNumber;
const formatNumber = (source, checkIsNumber = true) => {
    if (checkIsNumber && !(0, exports.isNumber)(source)) {
        return source;
    }
    return (0, prettyNumber_1.formattedNumber)(Number(source), true);
};
exports.formatNumber = formatNumber;
const formatAllNumbericValuesInObject = (target) => {
    const clone = { ...target };
    Object.entries(target).forEach(([key, value]) => {
        if ((0, exports.isNumber)(value)) {
            // @ts-ignore
            clone[`${key}_formatted`] = (0, exports.formatNumber)(value, false);
        }
    });
    return clone;
};
exports.formatAllNumbericValuesInObject = formatAllNumbericValuesInObject;
