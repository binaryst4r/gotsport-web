import axios, {AxiosRequestConfig, AxiosResponseHeaders} from "axios";
import { makeAuthHeader } from "./auth";

// replace with GotSport API headers
const _defaultHeaders: AxiosResponseHeaders = {
  "Content-Type": "application/json",
  Accept: 'application/json'
};

export interface RequestProps {
  method?: "GET" | "POST" | "PATCH" | "PUT";
  path: string;
  params?: any;
}

const baseUrl = process.env.REACT_APP_API_URL;

export const makeApiRequest = async ({
  method = "GET",
  params,
  path,
}: RequestProps) => {
  
  const defaultHeaders = Object.assign({}, _defaultHeaders, makeAuthHeader());
  const axiosParams = Object.assign({}, params);

  const options: AxiosRequestConfig = {
    method,
    url: `${baseUrl}${path}`,
    headers: defaultHeaders,
    timeout: 30000,
  };
  if (method.toUpperCase() === "GET") {
    options.params = axiosParams;
  } else {
    options.data = axiosParams;
  }
  const response = await axios(options);
  
  // return the entire response for sign in so we can access headers
  return Promise.resolve(response)
};
