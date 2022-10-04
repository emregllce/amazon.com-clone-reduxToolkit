import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import userReducer from "./userSlice"



export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
      // {
      //   // Ignore these action types
      //   ignoredActions: ['your/action/type'],
      //   // Ignore these field paths in all actions
      //   ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      //   // Ignore these paths in the state
      //   ignoredPaths: ['items.dates'],
      // },
    }),
  
});
