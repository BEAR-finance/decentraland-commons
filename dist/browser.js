"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = exports.utils = void 0;
var utils = require("./utils");
exports.utils = utils;
var env_1 = require("./env");
__exportStar(require("./log"), exports);
var env_2 = require("./env");
Object.defineProperty(exports, "BrowserEnv", { enumerable: true, get: function () { return env_2.BrowserEnv; } });
Object.defineProperty(exports, "Env", { enumerable: true, get: function () { return env_2.Env; } });
exports.env = new env_1.BrowserEnv();
//# sourceMappingURL=browser.js.map