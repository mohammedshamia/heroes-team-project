import { combineReducers } from "redux";

import userReducer from "../Slices/user";

import productsReducer from "../Slices/products";

import orderReducer from "../Slices/orders";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  order: orderReducer,
});
