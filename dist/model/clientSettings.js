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
Object.defineProperty(exports, "__esModule", { value: true });
var ClientSettings = (function (_super) {
    __extends(ClientSettings, _super);
    function ClientSettings() {
    }
    ClientSettings.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(ClientSettings.attributeTypeMap);
    };
    ClientSettings.discriminator = undefined;
    ClientSettings.attributeTypeMap = [
        {
            "name": "empty",
            "baseName": "empty",
            "type": "boolean"
        }
    ];
    return ClientSettings;
}(null));
exports.ClientSettings = ClientSettings;
//# sourceMappingURL=clientSettings.js.map