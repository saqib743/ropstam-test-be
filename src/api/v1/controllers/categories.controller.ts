import { RequestHandler } from "express";
import {
  createUserService,
  userLogInService,
} from "../services/users.services";
import mongoose from "mongoose";
import { response, errorResponse } from "../helpers/responses";
import {
  createCategoryService,
  deleteCategoryService,
  getAllCategoryService,
  updateCategoryService,
} from "../services/categories.service";

const createCategory: RequestHandler = async (req, res, next) => {
  try {
    const user = await createCategoryService(req.body);
    response(res, "Category Registered", 201, {
      user,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};

const getCategories: RequestHandler = async (req, res, next) => {
  try {
    let categories = await getAllCategoryService(req.body);

    response(res, "Category Sent", 201, {
      categories,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};
const updateCategories: RequestHandler = async (req, res, next) => {
  try {
    const user = await updateCategoryService(req.body, req.params.id);
    response(res, "Category updated", 201, {
      user,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};
const deleteCategories: RequestHandler = async (req, res, next) => {
  try {
    const user = await deleteCategoryService(req.params.id);
    response(res, "Category deleted", 201, {
      user,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};

export { createCategory, getCategories, updateCategories, deleteCategories };
