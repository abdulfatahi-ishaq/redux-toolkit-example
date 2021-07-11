import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { user: { firstName: "Ishaq" } },
  reducers: {
    getUser() {},
    setUser(state, action) {
      const userData = action.payload;
      console.log(userData);
      return { ...state, ...userData };
    },
  },
});

export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;
