
import { login, signup, getUser } from "./user.business";
import { IUserRequest } from "../../interfaces/interfaces";

export const userLogin = async (req: IUserRequest) => {
  return await login(req);
};

export const userSignup = async (req: IUserRequest) => {
  return await signup(req);
};

export const userGet = async (req: IUserRequest) => {
  return await signup(req);
};
