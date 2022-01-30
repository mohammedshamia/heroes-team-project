import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallBegan } from "../apiActions";
import { getAuthHeader } from "../../Helpers/tools";

import {
  IProductsSliceState,
  IProduct,
  // Review,
  IproductsByPaginate,
  IAllCategories,
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
  message: null,
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
    categoriesReceived: (
      state,
      { payload: { categories } }: PayloadAction<IAllCategories>
    ) => {
      state.categories = categories;
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

    productCreated: (state, { payload }: PayloadAction<any>) => {
      state.loading = false;
    },
    productdeletionSucceded: (
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) => {
      state.message = message;
      state.loading = false;
    },
    productdeletionFailed: (
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) => {
      state.message = message;
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
  productCreated,
  productdeletionSucceded,
  productdeletionFailed,
} = slice.actions;

export const getAllProductsByPaginate = (data?: {
  keyword?: string;
  pageNumber?: number;
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

export const addReviewToProducts = (
  productID: string,
  data: { rating: number; comment: string }
) =>
  apiCallBegan({
    url: `products/${productID}/reviews`,
    method: "post",
    data: data,
    headers: getAuthHeader(),
    onSuccess: productByIdReceived.type,
    msgOnSuccess: "review Added Successfuly",
  });

//Admin Routes
export const createProdcut = (data: {
  countInStock: number;
  discount: number;
  price: number;
  description: string;
  brand: string;
  name: string;
  colors: string[];
  categories: string[];
  images: string[];
}) =>
  apiCallBegan({
    url: "products",
    method: "post",
    data: data,
    headers: getAuthHeader(),
    onStart: productsRequested.type,
    onSuccess: productCreated.type,
  });

export const updateProdcut = (
  data: {
    countInStock: number;
    discount: number;
    price: number;
    description: string;
    brand: string;
    name: string;
    colors: string[];
    categories: string[];
    images: string[];
  },
  id: string
) =>
  apiCallBegan({
    url: `products/${id}`,
    method: "put",
    data: data,
    headers: getAuthHeader(),
    onStart: productsRequested.type,
    onSuccess: productCreated.type,
  });

export const deleteProdcut = (id: string) =>
  apiCallBegan({
    url: `products/${id}`,
    method: "delete",
    headers: getAuthHeader(),
    onStart: productsRequested.type,
    onSuccess: productdeletionSucceded.type,
    onError: productdeletionFailed.type,
  });

export default slice.reducer;
