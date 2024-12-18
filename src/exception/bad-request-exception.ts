import { GlobalException } from "./global-exception-handler";
import { ErrorCode } from "./custom-status-code";

export class BadRequestExceptionHandler extends GlobalException {
    constructor(message: string, errorCode: ErrorCode = ErrorCode.BAD_REQUEST) {
        super(message, errorCode, 400, null);
    }
}