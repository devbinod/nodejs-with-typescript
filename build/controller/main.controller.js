"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_services_1 = require("../services/user.services");
class UserController {
    constructor(app) {
        this.app = app;
        this.userService = new user_services_1.UserService();
        this.routes();
    }
    routes() {
        this.app.route('/').get(this.userService.welcomeMessage);
    }
}
exports.UserController = UserController;
