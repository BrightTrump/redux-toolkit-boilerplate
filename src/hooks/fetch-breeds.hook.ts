import { ErrorResponse } from "../@types/_index";
import { useLazyFetchDogBreedsQuery } from "../apis/dog-breed.apis";
import { useToast } from "../ui/_index";
import { Breed } from "../@types/dog-breed.types";

export default function useFetchBreeds() {
  const [fetchBreeds, { data }] = useLazyFetchDogBreedsQuery();
  const { callToast } = useToast();

  const fetchData = async () => {
    const response = await fetchBreeds();

    if ("error" in response) {
      const error = response.error as ErrorResponse;
      callToast({
        message: error.data?.detail || "Failed to fetch dog breeds",
        title: "Error",
        type: "error",
      });
      return;
    }

    return response.data as Breed[];
  };

  return {
    fetchBreedsData: data,
    isFetching: fetchData,
  };
}
