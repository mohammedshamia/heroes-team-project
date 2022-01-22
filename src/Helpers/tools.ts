import React from "react";
import cookie from "react-cookies";

export const getTokenCookie = () => cookie.load("proShop-access-toekn");

export const removeTokenCookie = () =>
  cookie.remove("proShop-access-toekn", { path: "/" });

export const getAuthHeader = () => {
  return { Authorization: `Bearer ${getTokenCookie()}` };
};
