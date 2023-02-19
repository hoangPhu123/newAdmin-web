import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
}

const spinnerSlice = createSlice({
  name: "spinnerSlice",
  initialState,
  reducers: {
    setOnLoading: (state, payload) => {
        state.isLoading = true;
    },
    setOffLoading: (state, paylaod) => {
        state.isLoading = false;
    }
  }
});

export const {setOnLoading, setOffLoading} = spinnerSlice.actions

export default spinnerSlice.reducer