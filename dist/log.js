"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
var env_1 = require("./env");
var Log = (function () {
    function Log(name, logLevels) {
        if (name === void 0) { name = ''; }
        this.name = name;
        this.logLevels = this.getLogLevels(logLevels);
    }
    Log.prototype.debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.msg.apply(this, __spreadArrays(['debug'], args));
    };
    Log.prototype.warn = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.msg.apply(this, __spreadArrays(['warn'], args));
    };
    Log.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.msg.apply(this, __spreadArrays(['log'], args));
    };
    Log.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.msg.apply(this, __spreadArrays(['error'], args));
    };
    Log.prototype.trace = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.logLevels.trace) {
            console.trace.apply(console, args);
        }
    };
    Log.prototype.msg = function (priority, message) {
        var extras = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extras[_i - 2] = arguments[_i];
        }
        if (!(priority in this.logLevels)) {
            throw new Error("Invalid log message priority: " + priority);
        }
        if (this.logLevels[priority]) {
            consoleOutput.apply(void 0, __spreadArrays([priority, this.name ? "[" + this.name + "]" : '', message], extras));
        }
    };
    Log.prototype.getLogLevels = function (overrides) {
        var inDev = env_1.Env.isDevelopment();
        return Object.assign({
            trace: inDev,
            debug: inDev,
            warn: true,
            log: true,
            error: true
        }, overrides);
    };
    return Log;
}());
exports.Log = Log;
function consoleOutput(priority, prefix, message) {
    if (prefix === void 0) { prefix = ''; }
    var extras = [];
    for (var _i = 3; _i < arguments.length; _i++) {
        extras[_i - 3] = arguments[_i];
    }
    if (typeof message === 'function') {
        message = message.apply(void 0, extras);
        extras = [];
    }
    console[priority].apply(console, __spreadArrays([prefix, message], extras));
}
//# sourceMappingURL=log.js.map