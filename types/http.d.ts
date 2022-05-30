import Axios, { Method, AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";

export type resultType = {
  accessToken?: string;
};

export type RequestMethods = Extract<
  Method,
  "get" | "post" | "put" | "delete" | "patch" | "option" | "head"
>;

export interface CloudHttpError extends AxiosError {
  isCancelRequest?: boolean;
}

export interface CloudHttpResoponse extends AxiosResponse {
  config: CloudHttpRequestConfig;
}

export interface CloudHttpRequestConfig extends AxiosRequestConfig {
  beforeRequestCallback?: (request: CloudHttpRequestConfig) => void;
  beforeResponseCallback?: (response: CloudHttpResoponse) => void;
}

export default class CloudHttp {
  request<T>(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: CloudHttpRequestConfig
  ): Promise<T>;
  post<T, P>(url: string, params?: T, config?: CloudHttpRequestConfig): Promise<P>;
  get<T, P>(url: string, params?: T, config?: CloudHttpRequestConfig): Promise<P>;
}
