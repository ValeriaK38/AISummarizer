import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

// import { curryGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

//reducer allows to get a slice
//middlewear used as a "bridge"
//getDefaultMiddleware) => getDefaultMiddleware.concat() the arg inside the concat is what gonna make the reduser work
// we will put there a service that we created
export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware),
});
