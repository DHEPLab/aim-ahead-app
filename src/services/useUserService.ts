import { instance, request } from "./api";
import { IUser } from "../types/user";

export const getUserDetail = async () => {
  return await request<IUser>(`/user`, {
    method: "GET",
  });
};

export const getUserName = () => {
  instance
    .get("/user")
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
