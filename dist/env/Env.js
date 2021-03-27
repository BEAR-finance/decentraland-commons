"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
var Env = (function () {
    function Env() {
        this.loaded = false;
    }
    Env.isDevelopment = function () {
        return Env.getName() === 'development';
    };
    Env.isProduction = function () {
        return Env.getName() === 'production';
    };
    Env.isTest = function () {
        return Env.getName() === 'test';
    };
    Env.getName = function () {
        return Env.get('NODE_ENV');
    };
    Env.get = function (name, fallback) {
        var value = process.env[name];
        if (value === undefined) {
            if (typeof fallback === 'function') {
                value = fallback(name);
            }
            else {
                value = fallback;
            }
        }
        return value;
    };
    Env.prototype.isLoaded = function () {
        return this.loaded;
    };
    Env.prototype.load = function (options) { };
    Env.prototype.isDevelopment = function () {
        return Env.isDevelopment();
    };
    Env.prototype.isProduction = function () {
        return Env.isProduction();
    };
    Env.prototype.isTest = function () {
        return Env.isTest();
    };
    Env.prototype.get = function (name, fallback) {
        if (!this.isLoaded()) {
            this.load();
        }
        return Env.get(name, fallback);
    };
    Env.prototype.parse = function (envString) {
        var envRegex = /\s*(\S*)=("|')?([^"'\s]*)("|')?\s*/gm;
        var env = {};
        var match;
        while ((match = envRegex.exec(envString)) !== null) {
            var key = match[1];
            var value = match[3];
            if (key[0] === '#')
                continue;
            env[key] = value.trim();
        }
        return env;
    };
    return Env;
}());
exports.Env = Env;
//# sourceMappingURL=Env.js.map