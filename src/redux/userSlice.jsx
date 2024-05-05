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
            console.log(action.payload);
        },
        unfollowUser(state, action) {
            state.follows = state.follows.filter((user) => user.uId !== action.payload.uId);
        },
        setFollowing(state, action) {
            state.follows = action.payload;
        },
    },
});

// Export actions
export const { followUser, unfollowUser, setFollowing } = userSlice.actions;

// Export reducer
export default userSlice.reducer;
