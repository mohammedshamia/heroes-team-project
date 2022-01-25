import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAuthHeader } from "../../Helpers/tools";

import { apiCallBegan } from "../apiActions";

import {
  IOrderState,
  IShippingAddress,
  IOrder,
  OrdersByPaginate,
} from "../Types";

const initialState: () => IOrderState = () => ({
  OrdersByPaginate: {
    orders: [],
    page: 0,
    pages: 0,
  },
  order: null,
  message: null,
  loading: false,
});

const slice = createSlice({
  name: "orders",

  initialState: initialState(),

  reducers: {
    orderCreated: (
      state,
      { payload }: PayloadAction<{ order: IOrder; message: string }>
    ) => {
      state.order = payload.order;
      state.message = payload.message;
      state.loading = false;
    },
    orderCreatedFailed: (
      state,
      { payload }: PayloadAction<{ message: string; stack: any }>
    ) => {
      state.message = payload.message;
      state.loading = false;
    },

    ordersRecieved: (state, { payload }: PayloadAction<OrdersByPaginate>) => {
      state.OrdersByPaginate = payload;
      state.loading = false;
    },
    orderRecieved: (state, { payload }: PayloadAction<IOrder>) => {
      state.order = payload;
      state.loading = false;
    },
    orderRecievedFailed: (
      state,
      { payload }: PayloadAction<{ message: string }>
    ) => {
      state.message = payload.message;
      state.loading = false;
    },

    orderDeliver: (state, { payload }: PayloadAction<IOrder>) => {
      state.order = payload;
      state.loading = false;
    },
    ordersRequested: (state, action) => {
      state.loading = true;
    },
  },
});

const {
  orderCreated,
  orderCreatedFailed,
  ordersRecieved,
  orderRecieved,
  ordersRequested,
  orderRecievedFailed,
  orderDeliver,
} = slice.actions;

//user Authentication functions
export const createOrder = (data: IShippingAddress) =>
  apiCallBegan({
    url: "orders",
    method: "post",
    data,
    onStart: ordersRequested.type,
    onSuccess: orderCreated.type,
    onError: orderCreatedFailed.type,
  });

export const getAllOrders = (pageNumber: number = 1) =>
  apiCallBegan({
    url: "orders/myorders",
    method: "get",
    params: { pageNumber: pageNumber },
    headers: getAuthHeader(),
    onStart: ordersRequested.type,
    onSuccess: ordersRecieved.type,
  });

export const getOrderDetails = (orderId: number) =>
  apiCallBegan({
    url: `orders/${orderId}`,
    method: "get",
    headers: getAuthHeader(),
    onStart: ordersRequested.type,
    onSuccess: orderRecieved.type,
    onError: orderRecievedFailed.type,
  });

//admin Routes
export const getOrders = (pageNumber: number = 1) =>
  apiCallBegan({
    url: "orders",
    method: "get",
    params: { pageNumber: pageNumber },
    headers: getAuthHeader(),
    onStart: ordersRequested.type,
    onSuccess: ordersRecieved.type,
    onError: orderCreatedFailed.type,
  });

export const deliverOrder = (orderId: number) =>
  apiCallBegan({
    url: `orders/${orderId}/deliver`,
    method: "put",
    headers: getAuthHeader(),
    onStart: ordersRequested.type,
    onSuccess: orderDeliver.type,
  });
export default slice.reducer;
