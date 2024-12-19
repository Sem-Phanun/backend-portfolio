import { GlobalException } from "./global-exception-handler";
import { StatusCode } from "./custom-status-code";

export class BadRequestExceptionHandler extends GlobalException {
    constructor(message: string , statusCode: StatusCode = StatusCode.BAD_REQUEST, errors: any) {
        super(message, statusCode, errors);
    }
}