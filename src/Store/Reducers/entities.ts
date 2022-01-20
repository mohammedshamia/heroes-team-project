import { combineReducers } from "redux";

import userReducer from "../Slices/user";

import productsReducer from "../Slices/products";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
});
