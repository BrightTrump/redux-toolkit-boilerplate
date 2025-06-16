import { configureStore } from "@reduxjs/toolkit";
import dogBreedSlice from "./dog-breed.slice";
import dogBreedApis from "../../apis/dog-breed.apis";
import { counterSlice } from "./counterSlice";

const store = configureStore({
  reducer: {
    [dogBreedSlice.name]: dogBreedSlice.reducer,
    [counterSlice.name]: counterSlice.reducer,
    [dogBreedApis.reducerPath]: dogBreedApis.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dogBreedApis.middleware),
  // devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
