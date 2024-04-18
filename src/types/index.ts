import type http from "http";
export type Request = {
  params: Record<string, any>;
  query: Record<string, any>;
} & http.IncomingMessage;

export type Response = http.ServerResponse<http.IncomingMessage> & {
  req: http.IncomingMessage;
};
export type Context = {
  req: Request;
  res: http.ServerResponse<http.IncomingMessage> & {
    req: http.IncomingMessage;
  };
};

export type RouterHandler = (arg0: Context) => any;