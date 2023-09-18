import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice'
import postsReducer from './slices/postsSlice'

const rootReducer = {
    auth: authReducer,
    posts: postsReducer
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
})