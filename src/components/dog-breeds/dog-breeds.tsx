import { useEffect } from "react";
import useFetchBreeds from "../../hooks/fetch-breeds.hook";
import { Breed } from "../../@types/dog-breed.types";

export default function DogBreeds() {
  const { fetchBreedsData, isFetching } = useFetchBreeds();

  useEffect(() => {
    console.log("Fetch breeds: ", fetchBreedsData);
  }, [fetchBreedsData]);

  return (
    <div>
      <div>Number of dogs fetched: {fetchBreedsData?.length || 0}</div>
      {!isFetching && <p>Loading...</p>}

      <table>
        <thead>
          <tr className="grid grid-flow-col gap-5">
            <th>Name</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {fetchBreedsData?.map((breed: Breed) => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>
                <img
                  src={breed.image.url}
                  alt={breed.name}
                  width={100}
                  height={250}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
