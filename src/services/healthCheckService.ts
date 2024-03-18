import { request } from "./api";

export const getHealthCheck = async () => {
  return await request<unknown>(`/healthcheck`, {
    method: "GET",
  });
};
