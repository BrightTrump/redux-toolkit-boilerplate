import { useGetPokemonByNameQuery } from "../../apis/pokemon.api";

export default function Pokemon() {
  // Using a query hook to automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <div className="App">
      {error ? (
        <div className="text-red-500">An unexpected error occured</div>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </div>
  );
}
