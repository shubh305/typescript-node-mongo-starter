
import { login, signup } from "./user.business";
import { Request } from "express";

export const userLogin = async (req: Request) => {
  return await login();
};

export const userSignup = async (req: Request) => {
  return await signup();
};

