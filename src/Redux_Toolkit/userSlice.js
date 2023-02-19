import { createSlice } from "@reduxjs/toolkit";
import { userLocalService } from "../service/localService";

const initialState = {
    user: userLocalService.get(),
    test: true
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.user = action.payload;
        }
    }
});

export const {setUserInfo} = userSlice.actions;
export default userSlice.reducer;

// const iniialState = {
//     admin: userLocalService.get(),
//     test: true,
// }

// const adminSlice = createSlice({
//     name: "adminSlice",
//     initialState,
//     reducers: {
//         setAdminInfo: (state, action) => {
//             state.admin = action.payload;
//         }
//     }
// })

// export const {setAdminInfo} = adminSlice.actions;
// export default adminSlice.reducer;