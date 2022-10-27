import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
    },
    setUserLogout: (state) => {
      state.userName = null;
      state.userEmail = null;
    },
  },
});

export const { setActiveUser, setUserLogout } = userSlice.actions;

export const selectUserName = (state: any) => state.user.userName;
export const selectUserEmail = (state: any) => state.user.userEmail;

export default userSlice.reducer;
