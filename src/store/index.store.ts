import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { counterSlice } from "./slices/counterSlice";
import dogBreedSlice from "./slices/dog-breed.slice";
import dogBreedApis from "../apis/dog-breed.apis";
import pokemonApi from "../apis/pokemon.api";

const store = configureStore({
  reducer: {
    [dogBreedSlice.name]: dogBreedSlice.reducer,
    [counterSlice.name]: counterSlice.reducer,
    [dogBreedApis.reducerPath]: dogBreedApis.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      dogBreedApis.middleware,
      pokemonApi.middleware
    ),
  // devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
