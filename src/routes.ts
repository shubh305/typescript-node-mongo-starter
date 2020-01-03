import { userRouter } from "./modules/user/user.route";

export const routes = [
  {
    path: "/api/users",
    handler: userRouter
  }
];
