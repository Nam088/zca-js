import { apiFactory } from "../utils";

export const getContextFactory = apiFactory()((_, ctx) => {
    return () => ctx;
});
