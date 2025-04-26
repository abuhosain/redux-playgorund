import { configureStore } from "@reduxjs/toolkit";
import counterRedeucer from "./features/counter/counterSlice";
import logger from "./middlewares/logger";
 
const store = configureStore({
  reducer: {
    counter: counterRedeucer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;
