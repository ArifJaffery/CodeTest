"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var property_controller_1 = require("./property-controller");
var main = /** @class */ (function () {
    function main() {
        this.port = 4000;
        console.log('Starting Server');
        this.app = express();
        new property_controller_1.PropertyController(this.app, '/property');
        this.app.listen(this.port);
    }
    return main;
}());
exports.main = main;
exports.default = new main();
