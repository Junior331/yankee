/* eslint-disable @typescript-eslint/no-explicit-any */

import { ReactNode } from "react";

export type httpRequest = {
  body: any;
  url: string;
  headers: any;
  method: "get" | "post" | "put" | "delete";
};

export type useAxiosRequestProps = {
  RequestResponse: any;
};

export type httpClientResponse<T = any> = {
  body: T;
  statusCode: number;
};
export interface messageConfig {
  title: string;
  status: string;
  icon: ReactNode;
  visible: boolean,
  message: string[];
}