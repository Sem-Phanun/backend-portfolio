import { StatusCode } from "./custom-status-code";

export class GlobalException extends Error {
    message: string;
    statusCode: number;
    errors: StatusCode;
    constructor(message: string, statusCode: number, errors: any) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errors = errors;
    }
}