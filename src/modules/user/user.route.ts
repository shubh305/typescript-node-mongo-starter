import express from "express";
import { userLogin, userSignup } from "../user/user.controller";
import { wrapAsync } from "../../helpers/router.helper";

export const userRouter = express.Router();

userRouter.post("/login", wrapAsync(userLogin));
userRouter.post("/signup", wrapAsync(userSignup));

