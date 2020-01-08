import express from "express";
import { userLogin, userSignup, userGet } from "../user/user.controller";
import { wrapAsync } from "../../helpers/router.helper";
import { jwtMiddleware } from "../../middlewares/auth.middleware"

export const userRouter = express.Router();

userRouter.post("/login", wrapAsync(userLogin));
userRouter.post("/signup", wrapAsync(userSignup));
userRouter.get("/", jwtMiddleware, wrapAsync(userGet));


