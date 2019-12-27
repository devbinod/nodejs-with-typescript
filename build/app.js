"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const main_controller_1 = require("./controller/main.controller");
class App {
    constructor() {
        this.app = express_1.default();
        this.setConfig();
        //Creating and assigning a new instance of our controller
        this.userController = new main_controller_1.UserController(this.app);
    }
    setConfig() {
        //Allows us to receive requests with data in json format
        this.app.use(body_parser_1.default.json({ limit: "50mb" }));
        //Allows us to receive requests with data in x-www-form-urlencoded format
        this.app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
        this.app.use(cors_1.default());
    }
}
exports.default = new App().app;
