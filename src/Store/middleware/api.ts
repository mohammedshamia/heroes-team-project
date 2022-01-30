import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import * as actions from "../apiActions";

import { addError, addSuccess } from "../Slices/notifications";

const api =
  ({ dispatch }: any) =>
  (next: any) =>
  async (action: PayloadAction<any>) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const {
      url,
      method,
      data,
      params,
      headers,
      onStart,
      onSuccess,
      onError,
      msgOnSuccess,
    } = action.payload;

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: `${process.env.REACT_APP_DOMAINURL}`,
        url,
        method,
        data,
        params,
        headers,
      });

      //general
      dispatch(actions.apiCallSuccess(response.data));
      if (msgOnSuccess) dispatch(addSuccess(msgOnSuccess));

      //specific
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    } catch (error: any) {
      //general
      dispatch(actions.apiCallFailed(error.message));
      dispatch(addError(error.message));
      //specific
      if (onError) dispatch({ type: onError, payload: error.message });
    }
  };

export default api;
