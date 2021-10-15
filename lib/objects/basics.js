"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNestedValueByKey = exports.isObject = void 0;
function isObject(target) {
    return !!target && typeof target === 'object' && !Array.isArray(target);
}
exports.isObject = isObject;
function getNestedValueByKey(target, key) {
    if (target === null || target === undefined) {
        return;
    }
    if (key.includes('.')) {
        // looking for nested value
        const subObjectKey = key.slice(0, key.indexOf('.'));
        const nextKey = key.slice(key.indexOf('.') + 1);
        const subObject = target[subObjectKey];
        if (isObject(subObject)) {
            return getNestedValueByKey(subObject, nextKey);
        }
    }
    return target[key];
}
exports.getNestedValueByKey = getNestedValueByKey;
