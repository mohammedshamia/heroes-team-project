import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";

import rootReducer from "./Reducers/rootReducer";

import api from "./middleware/api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api),
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export default store;
