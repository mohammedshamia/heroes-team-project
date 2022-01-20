import React from "react";
import cookie from "react-cookies";

export const getTokenCookie = () => cookie.load("proShop-access-token");

export const removeTokenCookie = () =>
  cookie.remove("proShop-access-token", { path: "/" });

export const getAuthHeader = () => {
  return { Authorization: `Bearer ${getTokenCookie()}` };
};
