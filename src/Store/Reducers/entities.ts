import { combineReducers } from "redux";

import userReducer from "../Slices/user";

import productsReducer from "../Slices/products";

import orderReducer from "../Slices/orders";
import notificationsReducer from "../Slices/notifications";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  order: orderReducer,
  notifications: notificationsReducer,
});
