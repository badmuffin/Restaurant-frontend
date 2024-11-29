import axios from "axios";
import React, { createContext, useCallback, useContext, useState } from "react";
// import envConfig from "../config/env.config";
import { ApiResponseData } from "../types/ApiResponse";

// export interface ApiResponseData {
//   success: boolean;
//   errorMsg: string;
//   response: object | Array<object>;
// }

interface HttpMethodContextType {
  showApiLoader: boolean;
  setShowApiLoader: React.Dispatch<React.SetStateAction<boolean>>;
  get: (
    endpoint: string,
    showLoader?: boolean,
    headers?: object
  ) => Promise<ApiResponseData>;
  post: (
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean,
    headers?: object
  ) => Promise<ApiResponseData>;
  put: (
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean,
    headers?: object
  ) => Promise<ApiResponseData>;
  deleteMe: (
    endpoint: string,
    body: object | Array<object>,
    showLoader?: boolean,
    headers?: object
  ) => Promise<ApiResponseData>;
}

export const HttpMethodContext = createContext<
  HttpMethodContextType | undefined
>(undefined);

// axios instance creation
const AxiosService = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  // baseURL: "http://localhost:8080"
});

const createApiErrorResponse = (error: unknown): ApiResponseData => {
  let errorMsg = "Something went wrong";

  if (error instanceof String) errorMsg = error.toString();
  else if (error instanceof Error) errorMsg = error.message;

  return { success: false, errorMsg, response: {} };
};

export const HttpMethodContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [showApiLoader, setShowApiLoader] = useState(false);

  AxiosService.defaults.headers.common.Accept = "application/json";
  AxiosService.defaults.headers.common["Content-Type"] = "application/json";

  const get = useCallback(
    async (endpoint: string, showLoader = true, headers = {}): Promise<ApiResponseData> => {
      setShowApiLoader(showLoader);

      try {
        const res = await AxiosService.get(endpoint, {headers});
        console.log(`GET: ${endpoint}:`, res.status);
        return { success: true, errorMsg: "", response: res.data };
      } catch (error) {
        return createApiErrorResponse(error);
      } finally {
        setShowApiLoader(false);
      }
    },
    [setShowApiLoader]
  );

  const post = useCallback(
    async (
      endpoint: string,
      data: object | Array<object>,
      showLoader = true,
      headers = {}
    ): Promise<ApiResponseData> => {
      setShowApiLoader(showLoader);

      try {
        const res = await AxiosService.post(endpoint, data, {headers});
        console.log(`POST: ${endpoint}: `, res.status);
        return { success: true, errorMsg: "", response: res.data };
      } catch (error) {
        return createApiErrorResponse(error);
      } finally {
        setShowApiLoader(false);
      }
    },
    [setShowApiLoader]
  );

  const put = useCallback(
    async (
      endpoint: string,
      data: object | Array<object>,
      showLoader = true,
      headers = {}
    ): Promise<ApiResponseData> => {
      setShowApiLoader(showLoader);

      try {
        const res = await AxiosService.put(endpoint, data, {headers});
        console.log(`PUT: ${endpoint}:`, res.status);
        return { success: true, errorMsg: "", response: res.data };
      } catch (error) {
        return createApiErrorResponse(error);
      } finally {
        setShowApiLoader(false);
      }
    },
    [setShowApiLoader]
  );

  const deleteMe = useCallback(
    async (
      endpoint: string,
      body: object | Array<object>,
      showLoader = true,
      headers = {}
    ): Promise<ApiResponseData> => {
      setShowApiLoader(showLoader);

      try {
        const res = await AxiosService.delete(endpoint, { data: body, headers });
        console.log(`DELETE: ${endpoint}:`, res.status);
        return { success: true, errorMsg: "", response: res.data };
      } catch (error) {
        console.log(`DELETE - ${endpoint}`, error);
        return createApiErrorResponse(error);
      } finally {
        setShowApiLoader(false);
      }
    },
    [setShowApiLoader]
  );

  return (
    <HttpMethodContext.Provider
      value={{ showApiLoader, setShowApiLoader, get, post, put, deleteMe }}
    >
      {children}
    </HttpMethodContext.Provider>
  );
};

export const useHttpMethodContext = () => {
  const context = useContext(HttpMethodContext);
  if (!context)
    throw new Error("useHttpMethodContext must be used within a UserProvider");
  return context;
};
