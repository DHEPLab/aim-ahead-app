import type { AxiosPromise, AxiosRequestConfig } from "axios";
import axios from "axios";

const baseUrl = "http://localhost:4000";

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
  const response: Promise<AxiosPromise<T>> = requestWithPrefix(url, baseUrl, config);
  return await response;
}

export const instance = axios.create({
  baseURL: baseUrl, // 设置基本的 API 地址
  timeout: 5000, // 设置请求超时时间
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      if (error.response.status === 401 || error.response.status === 403) {
        console.log("Unauthorized or forbidden");
      } else if (error.response.status === 404) {
        console.log("Not found");
      } else if (error.response.status >= 500) {
        console.log("Server error");
      }
    }
    return Promise.reject(error);
  },
);
