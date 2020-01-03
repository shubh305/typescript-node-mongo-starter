import { CustomError } from "../interfaces/interfaces";

export const errorHandler = (error: CustomError, status = 400) => {
  console.log(error);
  return {
    status: error.status || status,
    header: error.header || null,
    body: typeof error == "string" ? error : error.message
  };
}
