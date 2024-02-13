import { createSlice } from "@reduxjs/toolkit";

const initialState = 
localStorage.getItem('user') ?
JSON.parse(localStorage.getItem('user')) : { email: "", token: "", id: "" , displayName: "", profileUrl : "" }


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.email = action.payload.email;
            state.displayName = action.payload.displayName; 
            state.id = action.payload.id; 
            state.displayName = action.payload.displayName;
            state.profileUrl = action.payload.profileUrl;
            localStorage.setItem('user', JSON.stringify(state));
        },
        removeUser: (state) => {
            state.email = "";
            state.token = "";
            state.id = "";
            state.displayName = "";
            state.profileUrl = "action.payload.profileUrl";
            localStorage.removeItem('user');
        }
    }
})

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
