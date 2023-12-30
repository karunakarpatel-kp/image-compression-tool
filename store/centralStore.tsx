import { configureStore } from "@reduxjs/toolkit";
import utilitySlice from "./utilitySlice";

const store = configureStore({
  reducer: {
    utilitySlice: utilitySlice,
  },
});

export default store;

// Adding Types to RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
