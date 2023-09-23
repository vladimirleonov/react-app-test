import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../services/graphql";
import jwt_decode from "jwt-decode";

export const register = createAsyncThunk(
  "auth/register",
  async ({ email, password }) => {
    try {
      const response = await authService.register(email, password);
      return response.data;
    } catch (error) {
      throw new Error("An error occurred while registering the user");
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await authService.login(email, password);
      return response.data;
    } catch (error) {
      throw new Error("An error occurred while login the user");
    }
  }
);

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const response = await authService.checkAuth();
    return response.data;
  } catch (error) {
    throw new Error("An error occurred while login the user");
  }
});

const initialState = {
  data: {
    login: null,
    accessToken: null,
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
    },
  },
  extraReducers: (builder) => {
    //register
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
        state.data.accessToken = accessToken;
        localStorage.setItem("token", accessToken);

        const { email } = jwt_decode(accessToken);
        state.data.login = email;

        state.authError = null;
      }
    });
    builder.addCase(register.rejected, (state, action) => {
      state.status = "error";
      state.data.login = null;
      state.data.accessToken = null;
      state.authError = action.error.message;
    });
    //login
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
        state.data.accessToken = accessToken;
        localStorage.setItem("token", accessToken);

        const { email } = jwt_decode(accessToken);
        state.data.login = email;

        state.authError = null;
      }
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "error";
      state.data.login = null;
      state.data.accessToken = null;
      state.authError = action.error.message;
    });
    //checkAuth
    builder.addCase(checkAuth.pending, (state) => {
      state.status = "loading";
      state.data.login = null;
      state.data.accessToken = null;
      state.authError = null;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      if (action.payload.errors) {
        state.status = "idle";
        state.data.login = null;
        state.data.accessToken = null;

        localStorage.removeItem("token");
        localStorage.removeItem("isAuthenticatedOnReload");

        state.authError = null;
      } else if (action.payload.data.auth) {
        state.status = "idle";

        const accessToken = action.payload.data.auth.access_token;
        state.data.accessToken = accessToken;

        const { email } = jwt_decode(accessToken);
        state.data.login = email;
        state.authError = null;
      }
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.status = "idle";
      state.data.login = null;
      state.data.accessToken = null;
      localStorage.removeItem("token");
      localStorage.removeItem("isAuthenticatedOnReload");
      state.authError = null;
    });
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data.accessToken);
export const selectAccessToken = (state) => state.auth.data.accessToken;
export const selectUserLogin = (state) => state.auth.data.login;
export const selectAuthError = (state) => state.auth.authError;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
