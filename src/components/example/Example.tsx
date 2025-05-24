"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import {
  increment,
  decrement,
  setValue,
} from "@/redux/slices/example/exampleSlice";

export default function Example() {
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((state: RootState) => state.example.value);

  return (
    <div className="p-4 border rounded">
      <h2>Redux Example</h2>
      <p>Value: {value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(setValue(42))}>Set to 42</button>
    </div>
  );
}
