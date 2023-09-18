import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "../../services/graphql";

export const register = createAsyncThunk(
    "auth/register",
    async ({email, password}) => {
        try {
            const response = await authService.register(email, password);
            return {...response.data, login: email};
        } catch (error) {
            throw new Error("An error occurred while registering the user");
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async ({email, password}) => {
        try {
            const response = await authService.login(email, password);
            return {...response.data, login: email};
        } catch (error) {
            throw new Error("An error occurred while login the user");
        }
    }
);

const initialState = {
    data: {
        login: null,
        accessToken: null
    },
    status: "idle",
    authError: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.status = "idle";
            state.data.login = null;
            state.data.accessToken = null;
            state.authError = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.status = "loading";
            state.data.login = null;
            state.data.accessToken = null;
            state.authError = null;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.status = "error";
                state.data.login = null;
                state.data.accessToken = null;

                const error = action.payload.errors[0].message;

                state.authError = error;
            } else if (action.payload.data.register) {
                state.status = "idle";

                const accessToken = action.payload.data.register.access_token;

                state.data.login = action.payload.login;
                state.data.accessToken = accessToken;
                state.authError = null;
            }
        });
        builder.addCase(register.rejected, (state, action) => {
            state.status = "error";
            state.data.login = null;
            state.data.accessToken = null;
            state.authError = action.error.message;
        });
        builder.addCase(login.pending, (state) => {
            state.status = "loading";
            state.data.login = null;
            state.data.accessToken = null;
            state.authError = null;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.errors) {
                state.status = "error";
                state.data.login = null;
                state.data.accessToken = null;

                const error = action.payload.errors[0].message;

                state.authError = error;
            } else if (action.payload.data.login) {
                state.status = "idle";

                const accessToken = action.payload.data.login.access_token;

                state.data.login = action.payload.login;
                state.data.accessToken = accessToken;
                state.authError = null;
            }
        });
        builder.addCase(login.rejected, (state, action) => {
            state.status = "error";
            state.data.login = null;
            state.data.accessToken = null;
            state.authError = action.error.message;
        });
    },
});

export const selectIsAuth = state => Boolean(state.auth.data.accessToken);
export const selectAccessToken = state => state.auth.data.accessToken;
export const selectUserLogin = state => state.auth.data.login;
export const selectAuthError = state => state.auth.authError;

export const {logout} = authSlice.actions;
export default authSlice.reducer;
