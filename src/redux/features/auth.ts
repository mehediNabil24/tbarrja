import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserType = {
  email: string;
  exp: number;
  iat: number;
  role: string;
  userId: string;
};
interface AuthSate {
  user: UserType | null;
  accessToken: string | null;
  refreshToken: string | null;
  isLoading?: boolean;
}

const initialState: AuthSate = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(
      state,
      action: PayloadAction<{
        user: UserType | null;
        accessToken: string | null;
        refreshToken: string | null;
      }>
    ) {
      state.user = action.payload.user;
      state.isLoading = false;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setAccessToken(state, action: { payload: string | null }) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action: { payload: string | null }) {
      state.refreshToken = action.payload;
    },
    setIsLoading(state, action: { payload: boolean }) {
      state.isLoading = action.payload;
    },
    logout(state) {
      state.user = null;
      state.accessToken = null;
      state.refreshToken = null;
      document.cookie =
        "token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      document.cookie =
        "refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
      // redirect user
      window.location.href = "/login";
    },
  },
});

export const {
  setUser,
  setAccessToken,
  setIsLoading,
  logout,
  setRefreshToken,
} = authSlice.actions;

export default authSlice.reducer;
