import { responseHandler } from "../helpers/responseHandling.helper";
import { errorHandler } from "../helpers/errorHandling.helper";
import { Request, Response, NextFunction } from "express";
import { CustomError } from "../interfaces/interfaces";

// A high order function to wrap functions for response and error handling at a single place
export const wrapAsync = (fn: (req: Request, res: Response, next?: NextFunction) => Promise<any>) => {
  return (req: Request, res: Response, next?: NextFunction) => {
    return fn(req, res, next)
      .then((r: object) => {
        const response = responseHandler({ result: r });
        res.status(response.status).send(response);
        return next();
      })
      .catch((err: CustomError) => {
        const response = errorHandler(err);
        res.status(response.status).send(response);
        return next();
      });
  };
};


