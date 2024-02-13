import { createSlice } from "@reduxjs/toolkit";

const initialState = 
localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')) : 
{ email: "", 
  token: "", 
  id: "" , 
  displayName: "", 
  profileUrl : "",
  isAuthenticated: false,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.displayName = action.payload.displayName; 
            state.id = action.payload.id; 
            state.profileUrl = action.payload.profileUrl;
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(state));
        },
        removeUser: (state) => {
            state.email = "";
            state.token = "";
            state.id = "";
            state.displayName = "";
            state.profileUrl = "";
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
