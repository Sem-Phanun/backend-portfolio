
import { NextFunction, Request, Response } from "express"
import { GlobalException } from "../exception/global-exception-handler"
import { InternalErrorException } from "../exception/internal-error-exception"

export const errorHandler = (method: Function) => {
    return (req: Request, res: Response, next: NextFunction)=> {
        try {
            method(req, res, next)
        } catch (error: any) {
            let exception: GlobalException 
            if (error instanceof GlobalException) {
                exception = error
            }else{
                exception = new InternalErrorException("something went wrong", 
                    error.message, 
                    error.StatusCode
                )
            }
            next(exception)
        }
    }
}