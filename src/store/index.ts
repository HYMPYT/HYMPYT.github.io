import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { triplannerApi } from "./triplanner/triplanner.api";

export const store = configureStore({
    reducer: {
        [triplannerApi.reducerPath]: triplannerApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(triplannerApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>