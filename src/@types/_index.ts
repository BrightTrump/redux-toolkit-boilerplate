export enum HttpMethods {
  GET = "GET",
  POST = "POST",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

export type VoidCallback<T = undefined> = (cb?: T) => void;

export type ArgCallback<T> = (cb: T) => void;

export type PromiseVoidCallback<T = undefined> = (cb?: T) => Promise<void>;
