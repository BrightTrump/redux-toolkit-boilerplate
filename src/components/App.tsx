import Counter from "./counter/counter";
import Pokemon from "./services/pokemon";

export default function App() {
  return (
    // <div className="grid gap-5 max-h-screen place-items-center">
    //   <div>
    //     <Counter />
    //     <Pokemon />
    //   </div>
    // </div>
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid gap-5 mx-auto place-items-center">
        <Counter />
        <Pokemon />
      </div>
    </div>
  );
}
