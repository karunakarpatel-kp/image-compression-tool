import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./centralStore";

interface initialStateProps {
  openModal: boolean;
  getDataFromYT: any;
  getAPIServiceError: any;
  getLoadingStatus: boolean;
  getUserInputURL: string;
}

const initialState: initialStateProps = {
  openModal: false,
  getDataFromYT: null,
  getAPIServiceError: null,
  getLoadingStatus: false,
  getUserInputURL: "",
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
  },
});

export default utilitySlice.reducer;

export const { setOpenModal, sendDataFromYT, sendServiceError, sendLoadingStatus, sendInputURL } = utilitySlice.actions;

// export const openModalValue = ( state: RootState ) => state.setOpenModal.openModal;
