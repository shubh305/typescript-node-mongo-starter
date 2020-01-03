import { CustomResponse } from "../interfaces/interfaces";
import { msg } from "../configs/messages"
export const responseHandler = (response: CustomResponse) => {
  if (!response.hasOwnProperty("result")) {
    throw {
      error: msg.notFound,
      status: 404
    };
  }

  let responseObj;
  if (response.result && response.result.hasOwnProperty("result")) {
    responseObj = response.result;
  }
  else {
    responseObj = {
      result: response.result,
      status: 200,
      message: msg.success
    };
  }

  return responseObj;
};
