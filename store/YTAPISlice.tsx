import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const incomingURL = "/";

interface initialStateProps {
  data: any;
  status: "PENDING" | "FULFILLED" | "REJECTED";
  error: any;
}

const initialState: initialStateProps = {
  data: null,
  status: "PENDING",
  error: null,
};

export const callYTAPIService = createAsyncThunk("getDataFromYT", async (incomingURL: string, thunkAPI) => {
  const APIURL = `/api/download?url=${incomingURL}`;
  const response = await axios(APIURL);
  // return response.data;

  try {
    const response = await axios(APIURL);
    return response.data;
  } catch (error) {
    console.log(error, "ERROR FRONTEND");
    return error;
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
    });
    builder.addCase(callYTAPIService.rejected, (state, action) => {
      state.error = action.payload;
      state.status = "REJECTED";
    });
  },
});

export default YTAPISlice.reducer;
