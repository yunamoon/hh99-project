import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null,
};

const profileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      state.profile = action.payload;
    },
    addPost: (state, action) => {
      state.profile.posts.push(action.payload.id);
    },
    deletePost: (state, action) => {
      state.profile.posts = state.profile.posts.filter(
        (id) => id !== action.payload.postId
      );
    },
  },
});

export const { setUserProfile, addPost, deletePost } = profileSlice.actions;

export const selectUserProfile = (state) => state.profile.profile;

export default profileSlice.reducer;
