import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const userTokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    addToken: (state, action) => action.payload.token,
    removeToken: (state) => initialState,
  },
});

export const { addToken, removeToken } = userTokenSlice.actions;

export default userTokenSlice.reducer;
