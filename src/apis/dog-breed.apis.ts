import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./_index.apis";
import { HttpMethods } from "../@types/_index";
import { Breed } from "../@types/dog-breed.types";

const dogBreedApis = createApi({
  reducerPath: "dogBreedApis",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    fetchDogBreed: builder.query<Breed[], void>({
      query: () => ({
        method: HttpMethods.GET,
        url: "/breed",
      }),
    }),
  }),
});

export const { useLazyFetchDogBreedQuery } = dogBreedApis;

export default dogBreedApis;
