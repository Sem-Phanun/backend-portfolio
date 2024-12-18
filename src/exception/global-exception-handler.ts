import { ErrorCode } from "./custom-status-code";

export class GlobalException extends Error {
    message: string;
    errorCode: number;
    statusCode: number;
    errors: ErrorCode;
    constructor(message: string, errorCode: number, statusCode: number, errors: any) {
        super(message);
        this.message = message;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}