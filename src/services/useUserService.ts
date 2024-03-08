import { request } from "./api";
import { IUser } from "../types/user";

export const getUserDetail = async () => {
  return await request<IUser>(`/user`, {
    method: "GET",
  });
};
