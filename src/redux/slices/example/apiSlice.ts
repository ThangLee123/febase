import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataFromAPI } from "@/lib/apiClient";

export const fetchData = createAsyncThunk(
  "api/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchDataFromAPI();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

interface ApiState {
  data: any | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: ApiState = {
  data: null,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          typeof action.payload === "string" ? action.payload : "Unknown error";
      });
  },
});

export default apiSlice.reducer;
