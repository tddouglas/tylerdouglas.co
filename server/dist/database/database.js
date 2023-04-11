"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var pg_1 = __importDefault(require("pg"));
var Pool = pg_1["default"].Pool;
// Will move to config file outside of version control for production
// Export default should produce singleton
exports["default"] = new Pool({
    user: "root",
    host: "localhost",
    database: "tinyboiz",
    password: "y4DNksFDZ*DtmpyCV2d2",
    port: 5432
});
