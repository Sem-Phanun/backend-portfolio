import { GlobalException } from "./global-exception-handler";
import { StatusCode } from "./custom-status-code";
export class InternalErrorException extends GlobalException {
    constructor(message: string, statusCode: StatusCode.INTERNAL_SERVER_ERROR, errors: any) {
        super(message, statusCode, errors);
    }
}