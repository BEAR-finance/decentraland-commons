"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserEnv = void 0;
var Env_1 = require("./Env");
var BrowserEnv = (function (_super) {
    __extends(BrowserEnv, _super);
    function BrowserEnv() {
        var _this = _super.call(this) || this;
        _this.loaded = true;
        return _this;
    }
    return BrowserEnv;
}(Env_1.Env));
exports.BrowserEnv = BrowserEnv;
//# sourceMappingURL=BrowserEnv.js.map