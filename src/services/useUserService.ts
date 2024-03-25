import { instance, request } from "./api";
import { IUser } from "../types/user";
import { AxiosResponse } from "axios";

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

export const signup = (email: string, password: string): Promise<AxiosResponse<string>> => {
  return instance
    .post("/auth/signup", {
      email,
      password,
    })
    .then((res) => {
      return res;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
