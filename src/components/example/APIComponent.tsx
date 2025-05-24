"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { fetchData } from "@/redux/slices/example/apiSlice";

export default function APIComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector((state: RootState) => state.api);

  return (
    <div>
      <h2>API Data Fetch</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && <pre>{JSON.stringify(data, null, 2)}</pre>}
      <button onClick={() => dispatch(fetchData())}>Fetch Data</button>
    </div>
  );
}
