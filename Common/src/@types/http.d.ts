export interface Http {
  get: <T>(url: string, params?: Record<string, any>, config?: any) => Promise<T | any>;
  post: <T>(url: string, data?: Record<string, any>, config?: any) => Promise<T | any>;
  put: <T>(url: string, data?: Record<string, any>, config?: any) => Promise<T | any>;
  delete: <T>(url: string, params?: any, config?: any) => Promise<T | any>;
}