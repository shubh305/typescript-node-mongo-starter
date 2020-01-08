import { msg } from "../configs/messages";
import { Response, NextFunction } from "express";
import { errorHandler } from "../helpers/errorHandling.helper";
import { User } from "../modules/user/user.model";
import { IUserRequest } from "../interfaces/interfaces"


export const jwtMiddleware = async (req: IUserRequest, res: Response, next: NextFunction) => {
  try {
    const auth = req.header("Authorization");
    if (!auth) {
      throw msg.unauthorisedRequest;
    }
    const token = auth.substr(auth.indexOf(" ") + 1);
    const user = await User.findByToken(token);
    if (user) {
      req.user = user;
      return next();
    }
    else {
      throw msg.unauthorisedRequest;
    }
  }
  catch (err) {
    const error = errorHandler(err, 401);
    return res.status(error.status).send(error);
  }
};