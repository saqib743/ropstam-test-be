import { Response } from "express";

const response = (
  res: Response,
  message: string,
  statusCode: number,
  createdObj: Object
) => {
  return res.status(statusCode).json({
    message,
    statusCode,
    ...createdObj,
  });
};

const errorResponse = (res: Response, err: any) => {
  err = JSON.parse(err.message);
  return res.status(err.statusCode).json({
    error: {
      status: err.status,
      statusCode: err.statusCode,
      errorMessage: err.errorMessage,
    },
    message: err.errorMessage,
  });
};

export { response, errorResponse };
