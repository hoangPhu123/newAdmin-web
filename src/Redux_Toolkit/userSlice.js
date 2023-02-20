import { createSlice } from "@reduxjs/toolkit";
import { userLocalService } from "../service/localService";

const initialState = {
  admin: userLocalService.get(),
  test: true,
};

const adminSlice = createSlice({
  name: "adminSlice",
  initialState,
  reducers: {
    setAdminInfo: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { setAdminInfo } = adminSlice.actions;
export default adminSlice.reducer;
