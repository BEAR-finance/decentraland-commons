"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pick = exports.mapOmit = exports.omit = exports.isEmptyObject = exports.sleep = exports.promisify = void 0;
function promisify(fn) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            fn.apply(void 0, __spreadArrays(args, [function (error, result) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(result);
                    }
                }]));
        });
    };
}
exports.promisify = promisify;
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.sleep = sleep;
function isEmptyObject(obj) {
    return obj && Object.keys(obj).length === 0;
}
exports.isEmptyObject = isEmptyObject;
function omit(obj, keys) {
    var newKeys = Object.keys(obj).filter(function (key) { return !keys.includes(key); });
    return pick(obj, newKeys);
}
exports.omit = omit;
function mapOmit(array, keys) {
    return array.map(function (obj) { return omit(obj, keys); });
}
exports.mapOmit = mapOmit;
function pick(obj, keys) {
    var result = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }
    return result;
}
exports.pick = pick;
//# sourceMappingURL=index.js.map