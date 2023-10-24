import jwtDecode from "jwt-decode";

export const GetLocalStorage = (params) => {
  const value = JSON.parse(localStorage.getItem(params || "user"));
  return value;
};

export const GetUserId = (params) => {
  const userData = GetLocalStorage();
  const user = jwtDecode(params || userData?.userToken);
  return user;
}