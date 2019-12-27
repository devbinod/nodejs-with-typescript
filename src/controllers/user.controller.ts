import { BasicRoute } from "../routes/index";
import express from "express";
import { UserService } from "../services/user.service";

export class UserController implements BasicRoute {
  public path = "/";
  public router = express.Router();
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
    this.initRoutes();
    console.log("Invoked................")
  }
  initRoutes() {
    this.router.get("/users", this.userService.findAll);
    this.router.get("/users/:id", this.userService.findById);
    this.router.post("/users", this.userService.create);
    this.router.put("/users/:id", this.userService.update);
    this.router.delete("/users/:id", this.userService.delete);
  }
}
