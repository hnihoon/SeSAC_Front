import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const postsSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    changePost: (state) => !state 
  }
});

export const { changePost } = postsSlice.actions
export default postsSlice.reducer;
