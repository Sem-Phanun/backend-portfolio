import { StatusCode } from "./custom-status-code";
import { GlobalException } from "./global-exception-handler";


export class UnprocessableEntity extends GlobalException {
    constructor(message: string, errors: any) {
        super(message, StatusCode.UNPROCESSABLE,errors);

    }
}