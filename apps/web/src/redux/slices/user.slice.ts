import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  loggedIn: false,
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
