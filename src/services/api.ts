import type { AxiosPromise, AxiosRequestConfig } from "axios";
import axios from "axios";

const prefix = "http://localhost:4000";

export async function requestWithPrefix<T>(
  url: string,
  prefix: string,
  config?: AxiosRequestConfig,
): Promise<AxiosPromise<T>> {
  return await axios({
    url: `${prefix}${url}`,
    ...config,
  });
}

export async function request<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosPromise<T>> {
  const response: Promise<AxiosPromise<T>> = requestWithPrefix(url, prefix, config);
  return await response;
}
