import cookie from "react-cookies";
import { toast } from "react-toastify";

export const getTokenCookie = () => cookie.load("proShop-access-toekn");

export const removeTokenCookie = () =>
  cookie.remove("proShop-access-toekn", { path: "/" });

export const getAuthHeader = () => {
  return { Authorization: `Bearer ${getTokenCookie()}` };
};

export const showToast = (type: string, msg: string) => {
  switch (type) {
    case "SUCCESS":
      toast.success(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    case "ERROR":
      toast.error(msg, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      break;
    default:
      return false;
  }
};
