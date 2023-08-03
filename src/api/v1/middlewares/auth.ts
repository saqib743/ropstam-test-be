import { NextFunction, Request, Response } from "express";
import { getSecretKey } from "../helpers/environmentVariables";
import userModel from "../models/users.model";
import jwt from "jsonwebtoken";

const authentication = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        const decoded: any = jwt.verify(token, getSecretKey());
        if (decoded) {
          next();
        } else {
          next({ err: "not authorised" });
          return res.status(401).json({
            status: 401,
            message: "User Is not authorized.",
          });
        }
      }
    } catch (err: any) {
      return res.status(401).json({
        status: 401,
        message: "User Is not authorized.",
        error: err.message,
      });
    }
  };
};

export { authentication };
