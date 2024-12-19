import { GlobalException } from "./global-exception-handler";
import { StatusCode } from "./custom-status-code";

export class NotFoundException extends GlobalException {
    constructor(message: string, statusCode: StatusCode = StatusCode.UNPROCESSABLE, errors: any) {
        super(message, statusCode, errors);
    }
}