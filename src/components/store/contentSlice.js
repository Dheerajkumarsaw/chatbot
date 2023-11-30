import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
  name: "content",
  initialState: {
    name: "",
    age: 0,
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload !== "y" ? action.payload : "";
    },

    setAge: (state, action) => {
      state.age = Number(action.payload);
    },
  },
});

export const { setName, setAge } = contentSlice.actions;

export default contentSlice.reducer;
