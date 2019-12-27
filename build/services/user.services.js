"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserService {
    welcomeMessage(req, res) {
        return res.status(200)
            .send("Welcome to User Service API");
    }
}
exports.UserService = UserService;
