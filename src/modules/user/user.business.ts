import { User } from "./user.model";
import { IUserRequest } from "../../interfaces/interfaces";

export const login = async (req: IUserRequest) => {
  return await User.findOne({ email: req.body.email }).lean();
}

export const signup = async (req: IUserRequest) => {
  const user = new User(req.body);
  await user.save();
  const token = user.generateAuthToken();
  return token;
}

export const getUser = async (req: IUserRequest) => {
  return req.user;
}