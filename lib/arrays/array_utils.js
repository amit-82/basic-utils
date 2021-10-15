"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeFromArray = exports.EmptyArray = void 0;
exports.EmptyArray = Object.freeze([]);
function removeFromArray(item, array) {
    const i = array.indexOf(item);
    if (i > -1) {
        array.splice(i, 1);
    }
    return array;
}
exports.removeFromArray = removeFromArray;
