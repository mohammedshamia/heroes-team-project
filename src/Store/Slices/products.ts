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
    },
    categoriesReceived: (state, { payload }: PayloadAction<Icategories[]>) => {
      state.categories = payload;
    },
    productsByTopThreeReceived: (
      state,
      { payload }: PayloadAction<IProduct[]>
    ) => {
      state.productsByTopThree = payload;
    },
    productByIdReceived: (state, { payload }: PayloadAction<IProduct>) => {
      state.productById = payload;
    },
  },
});

const {
  productsByPaginateReceived,
  categoriesReceived,
  productsByTopThreeReceived,
  productByIdReceived,
} = slice.actions;

export const getAllProductsByPaginate = (data?: {
  keyword?: string;
  pageNumber?: string;
}) =>
  apiCallBegan({
    url: "products",
    method: "get",
    params: data,
    onSuccess: productsByPaginateReceived.type,
  });

export const getAllcategories = () =>
  apiCallBegan({
    url: "products/category/all",
    method: "get",
    onSuccess: categoriesReceived.type,
  });

export const getProductsByTopThree = () =>
  apiCallBegan({
    url: "products/top",
    method: "get",
    onSuccess: productsByTopThreeReceived.type,
  });

export const getProductsByCatergories = (data: { category: string }) =>
  apiCallBegan({
    url: `products/category/${data.category}`,
    method: "get",
    onSuccess: productsByPaginateReceived.type,
  });

export const getProductsById = (data: { id: string }) =>
  apiCallBegan({
    url: `products/${data.id}`,
    method: "get",
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
