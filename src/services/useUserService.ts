import { request } from "./api";
import { useRequest } from "ahooks";
import { IUser } from "../types/user";

const getUserDetail = async () => {
  return await request<IUser>(`/user`, {
    method: "GET",
  });
};

export const useGetUserDetail = () => {
  const { loading, runAsync, data } = useRequest(getUserDetail, {
    manual: true,
  });
  return { loading, getUserDetail: runAsync, user: data?.data };
};
