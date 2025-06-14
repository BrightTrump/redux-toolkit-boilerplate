import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div className="m-16">
        <button
          className="bg-gray-600 text-white p-2 rounded-md text-[1.2em] mr-3 hover:bg-black"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span className="text-[1.3em]">{count}</span>
        <button
          className="bg-gray-600 text-white p-2 rounded-md text-[1.2em] ml-3 hover:bg-black"
          aria-label="decrement value"
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </>
  );
}