import { Document, Model } from "mongoose";

export interface IUserDocument extends Document {
  token?: void;
  email: string;
  name: string;
  generateAuthToken: () => void;
};

export interface IUserModel extends Model<IUserDocument> {
  findByToken: (token: string) => any;
}