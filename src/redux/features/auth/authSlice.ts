import {createSlice} from "@reduxjs/toolkit";
import {TAuthState} from "../../../types";
import {RootState} from "../../store";

const initialState : TAuthState = {
  user: null,
  token: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {user, token} = action.payload;
      state.user = user;
      state.token = token;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    }
  }
})

export const { setUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;

export const currentToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;