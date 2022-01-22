import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiCallBegan } from "../apiActions";
import { getAuthHeader, removeTokenCookie } from "../../Helpers/tools";

import { IUserSliceState, IUser } from "../Types";

import cookie from "react-cookies";

const initialState: () => IUserSliceState = () => ({
  data: null,
  auth: null,
  loading: false,
});

const slice = createSlice({
  name: "user",

  initialState: initialState(),

  reducers: {
    userAuthenticated: (state, { payload }: PayloadAction<IUser>) => {
      state.data = payload;
      state.auth = true;
      state.loading = false;
    },

    userAuthenticatedFailed: (state, { payload }: PayloadAction<string>) => {
      state.data = null;
      state.auth = false;
      state.loading = false;
    },
    userRequested: (state, action) => {
      state.loading = true;
    },
    userCleared: () => initialState(),
  },
});

const {
  userAuthenticated,
  userAuthenticatedFailed,
  userCleared,
  userRequested,
} = slice.actions;

//user Authentication functions
export const registerUser = (data: any) =>
  apiCallBegan({
    url: "users/signup",
    method: "post",
    data,
    onStart: userRequested.type,
    onSuccess: userAuthenticated.type,
    onError: userAuthenticatedFailed.type,
  });

export const loginUser = (data: { email: string; password: string }) => {
  return apiCallBegan({
    url: "users/login",
    method: "post",
    data,
    onStart: userRequested.type,
    onSuccess: userAuthenticated.type,
    onError: userAuthenticatedFailed.type,
  });
};

export const userSignOut = () => {
  removeTokenCookie();
  return userCleared();
};

//user Profile functions
export const getUserProfile = () =>
  apiCallBegan({
    url: "users/profile",
    method: "get",
    headers: getAuthHeader(),
    onStart: userRequested.type,
    onSuccess: userAuthenticated.type,
    onError: userAuthenticatedFailed.type,
  });

export const updateUserProfile = (data: IUser) =>
  apiCallBegan({
    url: "users/profile",
    method: "put",
    headers: getAuthHeader(),
    data,
    onSuccess: userAuthenticated.type,
  });

//user Cart functions
export const addItemToCart = (data: { productId: string; qty: number }) =>
  apiCallBegan({
    url: "users/profile/cart",
    method: "put",
    headers: getAuthHeader(),
    data: data,
    onSuccess: userAuthenticated.type,
  });

export const deleteItemFromCart = (data: string) =>
  apiCallBegan({
    url: "users/profile/cart",
    method: "delete",
    headers: getAuthHeader(),
    params: {
      productId: data,
    },
    onSuccess: userAuthenticated.type,
  });

export default slice.reducer;
