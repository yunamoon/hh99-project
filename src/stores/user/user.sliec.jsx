import { createSlice } from "@reduxjs/toolkit";

const initialState = 
localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')) : 
{ id: "" ,
  email: "", 
  token: "", 
  displayName: "", 
  isAuthenticated: false,
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id; 
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.displayName = action.payload.displayName; 
            state.isAuthenticated = true;
            localStorage.setItem('user', JSON.stringify(state));
        },
        removeUser: (state) => {
            state.id = "";
            state.email = "";
            state.token = "";
            state.displayName = "";
            state.isAuthenticated = false;
            localStorage.removeItem('user');
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
