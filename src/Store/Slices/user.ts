import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { apiCallBegan } from "../apiActions";
import { getAuthHeader, removeTokenCookie } from "../../Helpers/tools";

import {
  IUserSliceState,
  IUser,
  IusersByPaginate,
  IUserProfile,
} from "../Types";

import cookie from "react-cookies";

const initialState: () => IUserSliceState = () => ({
  usersByPaginate: {
    users: [],
    page: 0,
    pages: 0,
  },
  userDetails: null,

  data: null,
  auth: null,

  loading: false,
  error: null,
});

const slice = createSlice({
  name: "user",

  initialState: initialState(),

  reducers: {
    userAuthenticated: (state, { payload }: PayloadAction<IUser>) => {
      state.data = payload;
      state.auth = true;
      state.loading = false;

      if (payload?.token) {
        cookie.save("proShop-access-toekn", payload?.token, {
          path: "/",
        });
      } else {
        localStorage.setItem("rule", "guist");
      }
    },

    userAuthenticatedFailed: (
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) => {
      state.data = null;
      state.auth = false;
      state.loading = false;
      state.error = message;
      localStorage.setItem("rule", "guist");
    },
    allUsersRecieved: (state, { payload }: PayloadAction<IusersByPaginate>) => {
      state.usersByPaginate = payload;

      state.loading = false;
    },
    userDetailsRecieved: (state, { payload }: PayloadAction<IUser>) => {
      state.userDetails = payload;

      state.loading = false;
    },
    allUsersRecievedFailed: (
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) => {
      state.error = message;
    },
    userdeleted: (state, action) => {
      state.loading = false;
    },
    itemAddedToCart: (state, { payload: { cart } }: PayloadAction<IUser>) => {
      if (state.data !== null) {
        state.data.cart = cart;
      }
    },
    userRequested: (state, action) => {
      state.loading = true;
    },
    userCleared: (state) => {
      localStorage.setItem("rule", "guist");
      return initialState();
    },
  },
});

const {
  userAuthenticated,
  userAuthenticatedFailed,
  userCleared,
  userRequested,
  allUsersRecieved,
  allUsersRecievedFailed,
  userDetailsRecieved,
  userdeleted,
  itemAddedToCart,
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
  localStorage.setItem("rule", "guist");
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

export const updateUserProfile = (data: IUserProfile) =>
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
    onSuccess: itemAddedToCart.type,
  });

export const deleteItemFromCart = (data: string) =>
  apiCallBegan({
    url: "users/profile/cart",
    method: "delete",
    headers: getAuthHeader(),
    params: {
      productId: data,
    },
    onSuccess: itemAddedToCart.type,
  });

//Admin functions
export const getAllUsers = (data: number) =>
  apiCallBegan({
    url: "users",
    method: "get",
    headers: getAuthHeader(),
    params: {
      productId: data,
    },
    onStart: userRequested.type,
    onSuccess: allUsersRecieved.type,
  });

export const getUserDetail = (userId: string) =>
  apiCallBegan({
    url: `users/${userId}`,
    method: "get",
    headers: getAuthHeader(),
    onStart: userRequested.type,
    onSuccess: userDetailsRecieved.type,
  });

export const editUserDetail = (
  body: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profileImage: string;
    dateOfBirth: string;
  },
  userId: string
) =>
  apiCallBegan({
    url: `users/${userId}`,
    method: "put",
    data: body,
    headers: getAuthHeader(),
    onStart: userRequested.type,
    onSuccess: allUsersRecieved.type,
    onError: allUsersRecievedFailed.type,
  });

export const deleteUser = (userId: string) =>
  apiCallBegan({
    url: `users/${userId}`,
    method: "delete",
    headers: getAuthHeader(),
    onStart: userRequested.type,
    onSuccess: userdeleted.type,
  });

export default slice.reducer;
