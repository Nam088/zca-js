import { apiFactory } from "../utils";

export const getOwnIdFactory = apiFactory()((_, ctx) => {
    return () => ctx.uid;
});
