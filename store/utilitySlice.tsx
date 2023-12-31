import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./centralStore";

interface initialStateProps {
  openModal: boolean;
  getDataFromYT: any;
  getAPIServiceError: any;
  getLoadingStatus: boolean;
  getUserInputURL: string;
  getOpenDialogBoxStatus: boolean;
}

const initialState: initialStateProps = {
  openModal: false,
  getDataFromYT: null,
  getAPIServiceError: null,
  getLoadingStatus: false,
  getUserInputURL: "",
  getOpenDialogBoxStatus: true,
};

const utilitySlice = createSlice({
  name: "utilitySlice",
  initialState,
  reducers: {
    setOpenModal: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    sendDataFromYT: (state, action: PayloadAction<any>) => {
      state.getDataFromYT = action.payload;
    },
    sendServiceError: (state, action: PayloadAction<any>) => {
      state.getAPIServiceError = action.payload;
    },
    sendLoadingStatus: (state, action: PayloadAction<any>) => {
      state.getLoadingStatus = action.payload;
    },
    sendInputURL: (state, action: PayloadAction<string>) => {
      state.getUserInputURL = action.payload;
    },
    setOpenDialogBox: (state, action: PayloadAction<boolean>) => {
      state.getOpenDialogBoxStatus = action.payload;
    },
  },
});

export default utilitySlice.reducer;

export const { setOpenModal, sendDataFromYT, sendServiceError, sendLoadingStatus, sendInputURL, setOpenDialogBox } =
  utilitySlice.actions;
