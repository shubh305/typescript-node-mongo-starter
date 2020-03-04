import "reflect-metadata";
import { useContainer, createExpressServer } from "routing-controllers";
import { Container } from 'typedi';
import "./configs/environment";
import "./db/mongoose";
import { ErrorHandlerMiddleware } from "./middlewares/errorHandler.middleware";
import { UserController } from "./modules/user/user.controller";
import { ResponseHandlerInterceptor } from "./interceptors/responseHandler.interceptor";

useContainer(Container);

const app = createExpressServer({
  cors: true,
  controllers: [UserController],
  middlewares: [ErrorHandlerMiddleware],
  interceptors: [ResponseHandlerInterceptor],
  routePrefix: "/api",
  defaultErrorHandler: false
});

app.listen(process.env.PORT, () => {
  console.log(`Express server listening on port ${process.env.PORT}`);
  console.log(`Environment : ${process.env.NODE_ENV}`);
});


