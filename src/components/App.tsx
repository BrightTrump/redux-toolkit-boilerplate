import Counter from "./counter/counter";
import Pokemon from "./services/pokemon";

export default function App() {
  return (
    <div className="grid gap-5 m-auto place-items-center">
      <Counter />
      <Pokemon />
    </div>
  );
}
