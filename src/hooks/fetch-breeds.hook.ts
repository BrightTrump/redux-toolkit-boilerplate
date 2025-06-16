import { ErrorResponse } from "../@types/_index";
import { useLazyFetchDogBreedsQuery } from "../apis/dog-breed.apis";
import { useToast } from "../ui/_index";

export default function useFetchBreeds() {
  const [fetchBreeds, { data: isFetching }] = useLazyFetchDogBreedsQuery();
  const { callToast } = useToast();

  const fetchData = async () => {
    const response = await fetchBreeds();

    const error = response.error as ErrorResponse;
    if ("error" in response) {
      callToast({
        message: error.data?.detail || "Failed to fetch dog breeds",
        title: "Error",
        type: "error",
      });
      return;
    }

    return response.data;
  };

  return {
    fetchData,
    isFetching,
  };
}
