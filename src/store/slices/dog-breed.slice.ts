import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breed } from "../../@types/dog-breed.types";

interface InitialStateProps {
  data: Breed | null;
}

const initialState: InitialStateProps = { data: null };

const dogBreedSlice = createSlice({
  name: "dogBreed",
  initialState,
  reducers: {
    setDogBreeds: (state, action: PayloadAction<Breed>) => ({
      ...state,
      data: action.payload,
    }),
  },
});

export const { setDogBreeds } = dogBreedSlice.actions;
export default dogBreedSlice;
