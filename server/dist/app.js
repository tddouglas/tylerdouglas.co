"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.app = void 0;
var http_errors_1 = __importDefault(require("http-errors"));
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var url_1 = require("url");
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var database_js_1 = __importDefault(require("./database/database.js"));
var index_js_1 = require("./routes/index.js");
var users_js_1 = require("./routes/users.js");
exports.app = (0, express_1["default"])();
dotenv_1["default"].config();
//configure database
database_js_1["default"].connect(function (err, client, done) {
    if (err)
        throw new Error(err.message);
    console.log("Connected to db");
});
// view engine setup
var __filename = (0, url_1.fileURLToPath)(import.meta.url);
var __dirname = path_1["default"].dirname(__filename);
exports.app.set("views", path_1["default"].join(__dirname, "views"));
exports.app.use((0, morgan_1["default"])("dev"));
exports.app.use(express_1["default"].json());
exports.app.use(express_1["default"].urlencoded({ extended: false }));
exports.app.use((0, cookie_parser_1["default"])());
exports.app.use(express_1["default"].static(path_1["default"].join(__dirname, "public")));
exports.app.use("/", index_js_1.router);
exports.app.use("/users", users_js_1.router);
// catch 404 and forward to error handler
exports.app.use(function (req, res, next) {
    next((0, http_errors_1["default"])(404));
});
// error handler
var errorHandler = function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
};
exports.app.use(errorHandler);
