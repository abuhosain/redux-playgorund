import { configureStore } from "@reduxjs/toolkit";
import counterRedeucer from "./features/counter/counterSlice";
 const store = configureStore({
  reducer: {
    counter : counterRedeucer,
  }
})

export default store;