import {  Application } from "express";
import { UserService } from "../services/user.services";

export class UserController {

    private userService: UserService;

    constructor(private app: Application){
        this.userService = new UserService()
        this.routes();
    }

    public routes(){
        this.app.route('/').get(this.userService.welcomeMessage);
    }
}