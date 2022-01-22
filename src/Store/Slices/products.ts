import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiActions";
import { getAuthHeader, removeTokenCookie } from "../../Helpers/tools";

import {
  IProductsSliceState,
  IProduct,
  Icategories,
  Review,
  IproductsByPaginate,
} from "../Types";

const initialState: () => IProductsSliceState = () => ({
  productsByPaginate: {
    products: [],
    page: 0,
    pages: 0,
  },
  categories: [],
  productsByTopThree: [],
  productById: null,
  loading: false,
});

const slice = createSlice({
  name: "products",
  initialState: initialState(),
  reducers: {
    productsByPaginateReceived: (
      state,
      { payload }: PayloadAction<IproductsByPaginate>
    ) => {
      state.productsByPaginate = payload;
      state.loading = false;
    },
    categoriesReceived: (state, { payload }: PayloadAction<Icategories[]>) => {
      state.categories = payload;
      state.loading = false;
    },
    productsByTopThreeReceived: (
      state,
      { payload }: PayloadAction<IProduct[]>
    ) => {
      state.productsByTopThree = payload;
      state.loading = false;
    },
    productByIdReceived: (state, { payload }: PayloadAction<IProduct>) => {
      state.productById = payload;
      state.loading = false;
    },
    productsRequested: (state, action) => {
      state.loading = true;
    },
  },
});

const {
  productsByPaginateReceived,
  categoriesReceived,
  productsByTopThreeReceived,
  productByIdReceived,
  productsRequested,
} = slice.actions;

export const getAllProductsByPaginate = (data?: {
  keyword?: string;
  pageNumber?: string;
}) =>
  apiCallBegan({
    url: "products",
    method: "get",
    params: data,
    onStart: productsRequested.type,
    onSuccess: productsByPaginateReceived.type,
  });

export const getAllcategories = () =>
  apiCallBegan({
    url: "products/category/all",
    method: "get",
    onStart: productsRequested.type,
    onSuccess: categoriesReceived.type,
  });

export const getProductsByTopThree = () =>
  apiCallBegan({
    url: "products/top",
    method: "get",
    onStart: productsRequested.type,
    onSuccess: productsByTopThreeReceived.type,
  });

export const getProductsByCatergories = (data: { category: string }) =>
  apiCallBegan({
    url: `products/category/${data.category}`,
    method: "get",
    onStart: productsRequested.type,
    onSuccess: productsByPaginateReceived.type,
  });

export const getProductsById = (data: { id: string }) =>
  apiCallBegan({
    url: `products/${data.id}`,
    method: "get",
    onStart: productsRequested.type,
    onSuccess: productByIdReceived.type,
  });

export const addReviewToProducts = (data: { id: string; review: Review }) =>
  apiCallBegan({
    url: `products/${data.id}/reviews`,
    method: "get",
    data,
    headers: getAuthHeader(),
    onSuccess: productByIdReceived.type,
  });

export default slice.reducer;
