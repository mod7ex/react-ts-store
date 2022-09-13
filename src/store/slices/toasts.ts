import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uid } from "~/utils";

export const TTL = 3000;

type ToastsList = { key: string; value: IToast };

const initialState: { list: ToastsList[] } = {
  list: [],
};

export const toastSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    add: (state, action: PayloadAction<IToast>) => {
      let { content, type, title } = action.payload;

      type = type || "primary";
      content = content || "__EMPTY__";

      state.list.push({ key: uid(), value: { content, title, type } });
    },

    drop: (state, action: PayloadAction<ToastsList["key"]>) => {
      state.list = state.list.filter(({ key }) => key !== action.payload);
    },
  },
});

export const { add, drop } = toastSlice.actions;

export default toastSlice.reducer;
