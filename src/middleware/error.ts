import { NextFunction, Request, Response } from "express";
import { GlobalException } from "../exception/global-exception-handler";

export const errorMiddleware = (error: GlobalException,req: Request, res: Response, next: NextFunction)=> {
    res.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode,
        errors: error.errors
    })
}