"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = require("./api");
var body_parser_1 = require("body-parser");
var PropertyController = /** @class */ (function () {
    function PropertyController(app, endpoint) {
        this.app = app;
        this.endpoint = endpoint;
        this.create = function (req, resp) {
            try {
                var requestjson = req.body;
                resp.send(api_1.response(req.body));
            }
            catch (error) {
                resp.send(api_1.requesterror);
            }
        };
        this.read = function (req, resp) {
            resp.send('Welcome to HomeTrack');
        };
        this.update = function (req, resp) {
            resp.sendStatus(200);
        };
        this.delete = function (req, resp) {
            resp.sendStatus(404);
        };
        app.get(this.endpoint, this.read);
        app.post(this.endpoint, body_parser_1.json(), this.create);
        app.put(this.endpoint, body_parser_1.json(), this.update);
        app.delete(this.endpoint, body_parser_1.json(), this.delete);
    }
    return PropertyController;
}());
exports.PropertyController = PropertyController;
