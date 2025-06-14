import Counter from "../features/counter/Counter";
import { useGetPokemonByNameQuery } from "../services/pokemon";

export default function App() {
  // Using a query hook to automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");
  return (
    <>
      <Counter />

      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny} alt={data.species.name} />
          </>
        ) : null}
      </div>
    </>
  );
}
