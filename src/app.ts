import express, { Application, Request, Response, NextFunction } from "express";

import bodyParser from "body-parser";
import cors from "cors";
import { UserController } from "./controller/main.controller";

class App {
  public app: Application;

  public userController: UserController;

  constructor() {
    this.app = express();
    this.setConfig();
    //Creating and assigning a new instance of our controller
    this.userController = new UserController(this.app);
  }

  private setConfig() {
    //Allows us to receive requests with data in json format

    this.app.use(bodyParser.json({ limit: "50mb" }));
    //Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
    this.app.use(cors());
  }
}

export default new App().app;
