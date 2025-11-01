import { ZaloApiError } from "./ZaloApiError";

export class ZaloApiLoginQRDeclined extends ZaloApiError {
    constructor(message: string = "Login QR request declined") {
        super(message);
        this.name = "ZaloApiLoginQRDeclined";
    }
}
