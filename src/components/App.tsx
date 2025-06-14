import Counter from "../counter/Counter";
import { useGetPokemonByNameQuery } from "../services/pokemon";

export default function App() {
  return (
    <>
      <Counter />

      <Pokemon />
    </>
  );
}
