import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
    follows: [],   // Store list of users being followed
   
};

// Create user slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        followUser(state, action) {
            state.follows.push(action.payload);
            console.log(action.payload.uId);
        },
        unfollowUser(state, action) {
            state.follows = state.follows.filter((user)=>{
                console.log(user.uId)
                return user.uId!==action.payload.uId;
            });
        },
    },
});

// Export actions
export const { followUser, unfollowUser} = userSlice.actions;

// Export reducer
export default userSlice.reducer;
