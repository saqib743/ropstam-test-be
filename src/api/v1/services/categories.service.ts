import {
  createUserRepository,
  userLogInRepository,
} from "../repositories/users.repository";
import mongoose from "mongoose";
import { Users } from "../interfaces/users";
import {
  createCategoryRepository,
  deleteCategoriesRepository,
  getAllCategoriesRepository,
  updateCategoriesRepository,
} from "../repositories/categories.repositories";
import { Categories } from "../interfaces/categories";

const createCategoryService = async (data: Categories) => {
  try {
    return await createCategoryRepository(data);
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while Registering a Cat."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};
const getAllCategoryService = async (data: Categories) => {
  try {
    return await getAllCategoriesRepository(data);
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while getting a Cat."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};
const updateCategoryService = async (data: Categories, id: string) => {
  try {
    return await updateCategoriesRepository(data, id);
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while updating a Cat."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};
const deleteCategoryService = async (id: string) => {
  try {
    return await deleteCategoriesRepository(id);
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while deleting a Cat."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};
export {
  createCategoryService,
  getAllCategoryService,
  updateCategoryService,
  deleteCategoryService,
};
