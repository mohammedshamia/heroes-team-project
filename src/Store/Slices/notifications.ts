import { createSlice } from "@reduxjs/toolkit";

import { INotificationState } from "../Types";

const initialState: () => INotificationState = () => ({});

const slice = createSlice({
  name: "notifications",

  initialState: initialState(),

  reducers: {
    errorAdded: (state, action) => {
      state.error = action.payload.error;
      state.msg = action.payload.msg;
    },
    successAdded: (state, action) => {
      state.success = action.payload.success;
      state.msg = action.payload.msg;
    },
    notificationsSuccessErrorCleared: (state) => {
      if (state.error) {
        state.error = null;
        state.msg = null;
      }
      if (state.success) {
        state.success = null;
        state.msg = null;
      }
    },
  },
});

const { errorAdded, successAdded, notificationsSuccessErrorCleared } =
  slice.actions;

export const addError = (msg: string) => errorAdded({ error: true, msg });

export const addSuccess = (msg: string) => successAdded({ success: true, msg });

export const clearSuccessErrorNotification = () =>
  notificationsSuccessErrorCleared();

export default slice.reducer;
