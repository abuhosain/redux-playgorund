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
    }
  }
});

export const { increament, decreamnet } = counterSlice.actions;
export default counterSlice.reducer;