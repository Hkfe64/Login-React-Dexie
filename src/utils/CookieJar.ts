import Cookies from "js-cookie";

export const setCookie = (name: string, data: any) => {
  Cookies.set(name, data, { path: "/" });
};

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const delCookie = (name: string) => {
  Cookies.remove(name);
};
