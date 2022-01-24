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
  order: null,
  OrdersByPaginate: {
    orders: [],
    page: 0,
    pages: 0,
  },
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
    ordersRequested: (state, action) => {
      state.loading = true;
    },
  },
});

const { orderCreated, orderCreatedFailed, ordersRequested } = slice.actions;

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
    onSuccess: orderCreated.type,
    onError: orderCreatedFailed.type,
  });

export const getOrderDetails = (orderId: number) =>
  apiCallBegan({
    url: `orders/${orderId}`,
    method: "get",
    headers: getAuthHeader(),
    onStart: ordersRequested.type,
    onSuccess: orderCreated.type,
    onError: orderCreatedFailed.type,
  });

export default slice.reducer;
