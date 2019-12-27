import {Request,Response,Router,NextFunction} from 'express'
export interface BasicRoute {
    initRoutes():any
}