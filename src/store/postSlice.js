import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  postList: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.postList.push({ ...action.payload, id: uuidv4() });
    },
    editPost: (state, action) => {
      const postIndex = state.postList.findIndex(
        (post) => post.id === action.payload.id
      );
      state.postList[postIndex] = action.payload;
    },
    deletePost: (state, action) => {
      const postIndex = state.postList.findIndex(
        (post) => post.id === action.payload
      );
      state.postList.splice(postIndex, 1);
    },
  },
});

export const { addPost, editPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
