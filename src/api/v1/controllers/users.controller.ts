import { RequestHandler } from "express";
import {
  createUserService,
  userLogInService,
} from "../services/users.services";
import mongoose from "mongoose";
import { response, errorResponse } from "../helpers/responses";

const createUser: RequestHandler = async (req, res, next) => {
  try {
    const user = await createUserService(req.body);
    response(res, "User Registered", 201, {
      user,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};

const userLogin: RequestHandler = async (req, res, next) => {
  try {
    const user: any = await userLogInService(req.body);
    response(res, "User Login", 200, {
      user: user.user,
      token: user.token,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};

export { createUser, userLogin };
