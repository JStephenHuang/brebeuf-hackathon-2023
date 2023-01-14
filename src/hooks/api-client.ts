import axios, { AxiosRequestConfig } from "axios";

export const useAPIClient = () => {
  const config: AxiosRequestConfig = {};
  config.withCredentials = true;

  return axios.create();
};
