import { Http } from '../@types/http';
import { getStorageItem } from '../utils/localStorage';
import * as I from './IhttpAxios';

const contentType = 'application/json';
const TOKEN_KEY = 'TOKEN_KEY';
const baseURL = process.env.NEXT_PUBLIC_API_URL;
const headers = {
  'Content-Type': contentType,
};

interface CustomError extends Error {
  response?: I.IErrorServiceResponse;
}

function addAuthorizationHeader(options: RequestInit) {
  const token = getStorageItem(TOKEN_KEY);

  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }
}

function errorDeal(error: CustomError | any) {
  if (!error.response) return;

  if (error?.response?.Erros && error?.response?.Erros[0].Mensagem) {
    // Implementar componente de notificação
    // error.message = error.response?.data.Erros[0].Mensagem;
  } else {
    // "Houve um error inesperado, tente novamente mais tarde."
  }
}

const httpFetch: Http = {
  get: async <T>(
    url: string,
    params?: Record<string, any>,
    config?: RequestInit,
  ) => {
    const queryString = new URLSearchParams(params).toString();
    const options: RequestInit = {
      ...config,
      method: 'GET',
      headers,
    };
    addAuthorizationHeader(options);

    try {
      const response = await fetch(`${baseURL}${url}?${queryString}`, options);
      const data = await response.json();
      return data as T;
    } catch (error) {
      errorDeal(error);
      throw error;
    }
  },
  post: async <T>(
    url: string,
    data?: Record<string, any>,
    config?: RequestInit,
  ) => {
    const options: RequestInit = {
      ...config,
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    };
    addAuthorizationHeader(options);

    try {
      const response = await fetch(`${baseURL}${url}`, options);
      const data = await response.json();
      return data as T;
    } catch (error) {
      errorDeal(error);
      throw error;
    }
  },
  put: async <T>(
    url: string,
    data?: Record<string, any>,
    config?: RequestInit,
  ) => {
    const options: RequestInit = {
      ...config,
      method: 'PUT',
      headers,
      body: JSON.stringify(data),
    };
    addAuthorizationHeader(options);

    try {
      const response = await fetch(`${baseURL}${url}`, options);
      const data = await response.json();
      return data as T;
    } catch (error) {
      errorDeal(error);
      throw error;
    }
  },
  delete: async <T>(url: string, params?: any, config?: RequestInit) => {
    const queryString = new URLSearchParams(params).toString();
    const options: RequestInit = {
      ...config,
      method: 'DELETE',
      headers,
    };
    addAuthorizationHeader(options);

    try {
      const response = await fetch(`${baseURL}${url}?${queryString}`, options);
      const data = await response.json();
      return data as T;
    } catch (error) {
      errorDeal(error);
      throw error;
    }
  },
};

export default httpFetch;
