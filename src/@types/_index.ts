export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export interface ErrorResponse {
  status: number;
  data: {
    title: string;
    name: string;
    status: number;
    detail: string;
    message: string;
    Message: string;
  };
}

export type VoidCallback<T = undefined> = (cb?: T) => void;

export type ArgCallback<T> = (cb: T) => void;

export type PromiseVoidCallback<T = undefined> = (cb?: T) => Promise<void>;
