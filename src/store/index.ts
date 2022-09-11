import { configureStore, type ThunkAction, type Action } from "@reduxjs/toolkit";
import toastsReducer from "./slices/toasts";

const store = configureStore({
  reducer: {
    toasts: toastsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
