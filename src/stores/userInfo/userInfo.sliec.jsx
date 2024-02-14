import { createSlice } from "@reduxjs/toolkit";

const initialState = 
localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')) : 
{ 
  id: "" ,
  email: "",  
  displayName: "", 
  photoURL : "",
  bio : "",
updatedAt: "",
}

export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.id = action.payload.id; 
            state.email = action.payload.email;
            state.displayName = action.payload.displayName; 
            state.photoURL= action.payload.photoURL;
            state.bio = action.payload.bio;
            state.updatedAt = action.payload.updatedAt,
            localStorage.setItem('userinfo', JSON.stringify(state));
        },
        removeUserInfo: (state) => {
            state.id = "";
            state.email = "";
            state.displayName = "";
            state.photoURL = "";
            state.bio = "";
            state.updatedAt = "";

            localStorage.removeItem('userinfo');
        }
    }
})

export const { setUserInfo, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
