import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  greeting: [],
  error: null,
  isLoading: false,
};

const API_URL = 'http://localhost:3001';

export const getGreeting = createAsyncThunk("greeting/getGreeting",
  async (_, thunkAPI) => {
    try {
      const response = await axios(`${API_URL}/api/v1/greetings/random_greetings`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error fetching greeting");
    }
  });

const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreeting.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getGreeting.fulfilled, (state, action) => {
      state.isLoading = false;
      state.greeting = action.payload;
      state.error = false;
    });
    builder.addCase(getGreeting.rejected, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });
  },
});

export default greetingSlice.reducer;
