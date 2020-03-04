import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";
import { IUserModel, IUserDocument } from "./user.interfaces";


const userSchema = new Schema({
  name: String,
  email: {
    type: String, unique: true
  }
}, {
  timestamps: true,
  versionKey: false
});

userSchema.statics.findByToken = async function (token: string) {
  try {
    const decoded: any = await jwt.verify(token, process.env.JWT_SECRET);
    return await this.findOne({
      "_id": decoded._id
    });
  }
  catch (e) {
    return Promise.reject(e);
  }
};

userSchema.methods.generateAuthToken = function () {
  let jwtObj = { _id: this._id.toHexString() };
  let token = jwt.sign(jwtObj, process.env.JWT_SECRET).toString();
  return token;
};


export const User: IUserModel = model<IUserDocument, IUserModel>("User", userSchema);
