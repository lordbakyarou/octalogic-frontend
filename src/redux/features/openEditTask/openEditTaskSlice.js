import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const openEditTaskSlice = createSlice({
  name: "editTask",
  initialState,
  reducers: {
    openEditTask: (state, action) => true,
    closeEditTask: (state, action) => false,
  },
});

export const { openEditTask, closeEditTask } = openEditTaskSlice.actions;

export default openEditTaskSlice.reducer;
