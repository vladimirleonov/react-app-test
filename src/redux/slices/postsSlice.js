import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: "c97ca5d5-3819-42f8-b239-7c6c1f43305c",
            title: "Article 1",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: ["tag1", "tag4"],
            rate: 3,
            date: "01.09.2023"
        },
        {
            id: "c97ca5d5-3819-42f8-b239-1c6c2c32510c",
            title: "Article 2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            tags: ["tag1", "tag4"],
            rate: 3,
            date: "02.09.2023"
        }
    ],
    errorMessage: null,
    status: "idle"
};

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action) => {
            state.items.push(action.payload);
        },
        removePost: (state, action) => {
            const idsToRemove = action.payload.split(",");
            state.items = state.items.filter((post) => !idsToRemove.includes(post.id));
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload;
        },
        startWebSocketRequest: (state) => {
            state.status = "loading";
        },
        websocketRequestSuccess: (state) => {
            state.status = "idle";
        },
        websocketRequestFailure: (state) => {
            state.status = "error";
        }
    }
});

export const selectPostsError = (state) => state.posts.errorMessage;
export const selectPosts = (state) => state.posts.items;

export const {
    addPost,
    removePost,
    setError,
    changePostRating,
    setErrorMessage,
    startWebSocketRequest,
    websocketRequestSuccess,
    websocketRequestFailure
} = postsSlice.actions;

export default postsSlice.reducer;
