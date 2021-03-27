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
exports.NodeEnv = void 0;
var fs = require("fs");
var utils_1 = require("../utils");
var Env_1 = require("./Env");
var NodeEnv = (function (_super) {
    __extends(NodeEnv, _super);
    function NodeEnv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeEnv.prototype.load = function (_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.path, path = _c === void 0 ? './.env' : _c, _d = _b.values, values = _d === void 0 ? {} : _d;
        if (utils_1.isEmptyObject(values) && fs.existsSync(path)) {
            var envString = fs.readFileSync(path).toString();
            values = this.parse(envString);
        }
        Object.assign(process.env, values);
        this.loaded = true;
    };
    return NodeEnv;
}(Env_1.Env));
exports.NodeEnv = NodeEnv;
//# sourceMappingURL=NodeEnv.js.map