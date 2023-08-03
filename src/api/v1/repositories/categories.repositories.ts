import userModel from "../models/users.model";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Users } from "../interfaces/users";
import { getSecretKey } from "../helpers/environmentVariables";
import { emailService } from "../services/emailservice";
import categoriesModal from "../models/categories.modal";
import { Categories } from "../interfaces/categories";

const createCategoryRepository = async (data: Categories) => {
  try {
    let cat = await categoriesModal.findOne({
      categoryName: data.categoryName,
    });

    if (!cat) {
      const _id = new mongoose.Types.ObjectId();
      const newCat = new categoriesModal({
        _id,
        ...data,
      });

      const addedCat = await newCat.save();

      return addedCat;
    } else {
      throw new Error(
        '{"status":"Already Exists", "statusCode":403, "errorMessage":"Cat Has Already Been Registered"}'
      );
    }
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

const getAllCategoriesRepository = async (data: Categories) => {
  try {
    let cat = await categoriesModal.find();

    return cat;
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
const updateCategoriesRepository = async (data: Categories, id: string) => {
  try {
    const doc_id = new mongoose.Types.ObjectId(id);
    let cat = await categoriesModal.findOne({
      _id: doc_id,
    });

    if (cat) {
      const { id, ...rest } = data;
      const filter = { _id: doc_id };
      const updateDocument = { $set: rest };

      return await categoriesModal.updateOne(filter, updateDocument);
    } else {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while updating a Cat or cat not found"}'
      );
    }
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

const deleteCategoriesRepository = async (id: string) => {
  try {
    const doc_id = new mongoose.Types.ObjectId(id);
    let cat = await categoriesModal.findOne({
      _id: doc_id,
    });

    if (cat) {
      return await categoriesModal.deleteOne(doc_id);
    } else {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while updating a Cat or cat not found"}'
      );
    }
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

export {
  createCategoryRepository,
  getAllCategoriesRepository,
  updateCategoriesRepository,
  deleteCategoriesRepository,
};
