import { ZaloApiError } from "./ZaloApiError";

export class ZaloApiMissingImageMetadataGetter extends ZaloApiError {
    constructor() {
        super("Missing `imageMetadataGetter`. Please provide it in the Zalo object options.");
        this.name = "ZaloApiMissingImageMetadataGetter";
    }
}
