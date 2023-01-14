import axios, { AxiosRequestConfig } from "axios";

export const useAPIClient = () => {
  const config: AxiosRequestConfig = {};
  config.baseURL = process.env.REACT_APP_BACKEND_URL;
};
