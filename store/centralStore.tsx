import { configureStore } from "@reduxjs/toolkit";
import utilitySlice from "./utilitySlice";
import YTAPISlice from "./YTAPISlice";

const store = configureStore({
  reducer: {
    utilitySlice: utilitySlice,
    YTAPISlice: YTAPISlice,
  },
});

export default store;

// Adding Types to RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
