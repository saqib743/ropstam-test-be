import {
  createUserRespository,
  userLogInRespository,
} from "../repositories/users.repository";
import mongoose from "mongoose";
import { Users } from "../interfaces/users";

const createUserService = async (data: Users) => {
  try {
    return await createUserRespository(data);
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while Registering a User."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};

const userLogInService = async (data: { email: string; password: string }) => {
  try {
    return await userLogInRespository(data);
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while Registering a User."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};

export { createUserService, userLogInService };
