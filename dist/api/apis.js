"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./adminServicesApi"));
var adminServicesApi_1 = require("./adminServicesApi");
__export(require("./cacheServicesApi"));
var cacheServicesApi_1 = require("./cacheServicesApi");
__export(require("./clientServicesApi"));
var clientServicesApi_1 = require("./clientServicesApi");
__export(require("./computeServicesApi"));
var computeServicesApi_1 = require("./computeServicesApi");
__export(require("./contentServicesApi"));
var contentServicesApi_1 = require("./contentServicesApi");
__export(require("./dataServicesApi"));
var dataServicesApi_1 = require("./dataServicesApi");
__export(require("./emailServicesApi"));
var emailServicesApi_1 = require("./emailServicesApi");
__export(require("./kioskServicesApi"));
var kioskServicesApi_1 = require("./kioskServicesApi");
__export(require("./officeServicesApi"));
var officeServicesApi_1 = require("./officeServicesApi");
__export(require("./packageServicesApi"));
var packageServicesApi_1 = require("./packageServicesApi");
__export(require("./platformServicesApi"));
var platformServicesApi_1 = require("./platformServicesApi");
__export(require("./projectServicesApi"));
var projectServicesApi_1 = require("./projectServicesApi");
__export(require("./queryServicesApi"));
var queryServicesApi_1 = require("./queryServicesApi");
__export(require("./schemaServicesApi"));
var schemaServicesApi_1 = require("./schemaServicesApi");
__export(require("./securityServicesApi"));
var securityServicesApi_1 = require("./securityServicesApi");
__export(require("./templateServicesApi"));
var templateServicesApi_1 = require("./templateServicesApi");
var HttpError = (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [adminServicesApi_1.AdminServicesApi, cacheServicesApi_1.CacheServicesApi, clientServicesApi_1.ClientServicesApi, computeServicesApi_1.ComputeServicesApi, contentServicesApi_1.ContentServicesApi, dataServicesApi_1.DataServicesApi, emailServicesApi_1.EmailServicesApi, kioskServicesApi_1.KioskServicesApi, officeServicesApi_1.OfficeServicesApi, packageServicesApi_1.PackageServicesApi, platformServicesApi_1.PlatformServicesApi, projectServicesApi_1.ProjectServicesApi, queryServicesApi_1.QueryServicesApi, schemaServicesApi_1.SchemaServicesApi, securityServicesApi_1.SecurityServicesApi, templateServicesApi_1.TemplateServicesApi];
//# sourceMappingURL=apis.js.map