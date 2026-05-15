import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
    name: "feed",
    initialState: null,
    reducers: {
        addUserFeed: (state, action) => {
            return action.payload
        }
    }
})
export const { addUserFeed } = feedSlice.actions;
export default feedSlice.reducer