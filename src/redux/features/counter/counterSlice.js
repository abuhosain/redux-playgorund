import { createSlice } from "@reduxjs/toolkit";

 

const initialState = {
  count : 0,
}

const counterSlice = createSlice({
  name : "counter",
  initialState,
  reducers: {
    increament : (state) => {
      state.count += 1;
    },
    decreamnet: (state) => {
      state.count -= 1;
    },
    increamentByvalue: (state, action) => {
      state.count += action.payload;
    }
  }
});

export const { increament, decreamnet, increamentByvalue } = counterSlice.actions;
export default counterSlice.reducer;