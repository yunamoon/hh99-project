import { createSlice } from "@reduxjs/toolkit";

const initialState = 
localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')) : 
{ 
    uid: "",
    email: "",
    username: "",
    bio: "",
    profilePicURL: "",
    followers: [],
    following: [],
    posts: [],
    createdAt: "",
    updatedAt: "", 
    isAuthenticated: false,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.uid = action.payload.uid; 
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.username = action.payload.username; 
            state.bio = action.payload.bio; 
            state.profilePicURL = action.payload.profilePicURL; 
            state.followers = action.payload.followers; 
            state.following = action.payload.following; 
            state.posts = action.payload.posts; 
            state.createdAt = action.payload.createdAt; 
            state.updatedAt = action.payload.updatedAt; 
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(state));
        },
        removeUser: (state) => {
            state.uid = ""; 
            state.email = ""; 
            state.token = ""; 
            state.username = ""; 
            state.bio = ""; 
            state.profilePicURL = "";
            state.followers = "";
            state.following = ""; 
            state.posts = "";
            state.createdAt = "";
            state.updatedAt = "";
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
