import { ZaloApiError } from "./ZaloApiError";

export class ZaloApiLoginQRAborted extends ZaloApiError {
    constructor(message: string = "Operation aborted") {
        super(message);
        this.name = "ZaloApiLoginQRAborted";
    }
}
