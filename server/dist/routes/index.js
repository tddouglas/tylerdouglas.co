"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var vue_1 = require("vue");
var server_renderer_1 = require("vue/server-renderer");
exports.router = express_1["default"].Router();
/* GET home page. */
exports.router.get("/", function (req, res, next) {
    var app = (0, vue_1.createSSRApp)({
        data: function () { return ({ count: 1 }); },
        template: "\n\t\t\t<h1>Welcome to a static SSR HTML page. No interactivity here.<br>I can access variables like count:{{count}} however</h1>"
    });
    (0, server_renderer_1.renderToString)(app).then(function (html) {
        res.send("\n    <!DOCTYPE html>\n    <html>\n      <head>\n        <title>Vue SSR Example</title>\n      </head>\n      <body>\n        <div id=\"app\">".concat(html, "</div>\n      </body>\n    </html>\n    "));
    });
});
