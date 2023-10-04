import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { getStorageItem } from 'src/utils/localStorage';

import { Http } from '../@types/http';
import * as I from './IhttpAxios';

const contentType = 'application/json';
const TOKEN_KEY = 'TOKEN_KEY';

const api: AxiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    'Content-Type': contentType,
  },
  timeout: 120000,
});

function addAuthorizationHeader(config: InternalAxiosRequestConfig) {
  const token: string = getStorageItem(TOKEN_KEY);
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;
  }
}

function requestInterceptor(config: InternalAxiosRequestConfig) {
  // var noLoading = !!requestConfig.params?.noLoading;

  addAuthorizationHeader(config);
  // ActiveLoading(noLoading);
  return config;
}

function errorRequestInterceptor(errorRequest: any) {
  // DisableLoading();
  return Promise.reject(errorRequest);
}

function responseInterceptor(response: AxiosResponse) {
  // DisableLoading();
  return response;
}

function errorResponseInterceptor(errorResponse: any) {
  // DisableLoading();
  errorDeal(errorResponse);
  return Promise.reject(errorResponse);
}

function errorDeal(error: AxiosError<I.IErrorServiceResponse>) {
  if (!error.response) return;

  if (error.response?.data.Erros && error.response?.data.Erros[0].Mensagem) {
    // Implementar componente de notificação
    // error.message = error.response?.data.Erros[0].Mensagem;
  } else {
    // "Houve um error inesperado, tente novamente mais tarde."
  }
}

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => requestInterceptor(config),
  (error) => errorRequestInterceptor(error),
);

api.interceptors.response.use(
  (response: AxiosResponse) => responseInterceptor(response),
  (error) => errorResponseInterceptor(error),
);

const httpAxios: Http = {
  get: async <T>(
    url: string,
    params?: Record<string, any>,
    config?: AxiosRequestConfig,
  ) => {
    const response = await api.get(url, { ...config, params: params });
    return response.data as T;
  },
  post: async <T>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ) => {
    const response = await api.post(url, { ...data }, { ...config });
    return response.data as T;
  },
  put: async <T>(
    url: string,
    data?: Record<string, any>,
    config?: AxiosRequestConfig,
  ) => {
    const response = await api.put(url, { ...data }, { ...config });
    return response.data as T;
  },
  delete: async <T>(url: string, params?: any, config?: AxiosRequestConfig) => {
    const response = await api.delete(url, { ...config, params: params });
    return response.data as T;
  },
};

export default httpAxios;
