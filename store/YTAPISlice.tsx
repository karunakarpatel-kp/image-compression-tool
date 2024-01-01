import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface initialStateProps {
  data: any;
  status: "" | "PENDING" | "FULFILLED" | "REJECTED";
  error: any;
}

const initialState: initialStateProps = {
  data: null,
  status: "",
  error: null,
};

export const callYTAPIService = createAsyncThunk("getDataFromYT", async (incomingURL: string, thunkAPI) => {
  const APIURL = `/api/download?url=${incomingURL}`;
  try {
    const response = await axios(APIURL);
    return response.data;
  } catch (error: any) {
    return error.message;
  }
});

const YTAPISlice = createSlice({
  name: "YTAPISlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(callYTAPIService.pending, (state, action) => {
      state.status = "PENDING";
    });
    builder.addCase(callYTAPIService.fulfilled, (state, action: PayloadAction<any>) => {
      state.data = action.payload;
      state.status = "FULFILLED";
      state.error = "";
      if (action.payload === "Request failed with status code 500") {
        state.error = action.payload;
        state.status = "REJECTED";
      }
    });
    builder.addCase(callYTAPIService.rejected, (state, action) => {
      console.log(action.payload, "REJECTED CASE");
      state.error = action.payload;
      state.status = "REJECTED";
    });
  },
});

export default YTAPISlice.reducer;
