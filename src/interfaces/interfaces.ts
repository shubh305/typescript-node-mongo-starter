import { Request } from "express";


export interface CustomResponse {
  result: {
    status?: number;
    message?: string;
  };
  status?: number;
  message?: string;
}

export interface CustomError {
  status?: number;
  header?: string;
  body?: object;
  message?: object;
}

export interface IUserRequest extends Request {
  user: string
}