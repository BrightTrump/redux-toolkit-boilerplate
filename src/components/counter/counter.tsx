import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slices/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(increment());
  };

  return (
    <>
      <div>
        <button
          className="bg-gray-600 text-white p-2 rounded-md text-[1.2em] mr-3 hover:bg-black"
          aria-label="Increment value"
          onClick={handleClick}
        >
          Increment
        </button>
        <span className="text-[1.3em]">{count}</span>
        <button
          className="bg-gray-600 text-white p-2 rounded-md text-[1.2em] ml-3 hover:bg-black"
          aria-label="decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </>
  );
}
