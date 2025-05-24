import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/example/exampleSlice";
import apiReducer from "./slices/example/apiSlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer, // Add slices here
    api: apiReducer,
  },
});

// Infer types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
