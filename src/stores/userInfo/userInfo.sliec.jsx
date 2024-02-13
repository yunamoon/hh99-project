import { createSlice } from "@reduxjs/toolkit";

const initialState = 
localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')) : 
{ 
  id: "" ,
  email: "",  
  displayName: "", 
  profileUrl : "",
  bio : "",
}


export const userInfoSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.id = action.payload.id; 
            state.email = action.payload.email;
            state.displayName = action.payload.displayName; 
            state.profileUrl = action.payload.profileUrl;
            state.bio = action.payload.bio;
            localStorage.setItem('userinfo', JSON.stringify(state));
        },
        removeUserInfo: (state) => {
            state.id = "";
            state.email = "";
            state.displayName = "";
            state.profileUrl = "";
            state.bio = "";
            localStorage.removeItem('userinfo');
        }
    }
})

export const { setUserInfo, removeUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
