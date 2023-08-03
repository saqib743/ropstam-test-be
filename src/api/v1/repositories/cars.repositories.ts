import mongoose from "mongoose";
import { Cars } from "../interfaces/cars";
import carsModel from "../models/cars.model";

const createCarsRepository = async (data: Cars) => {
  try {
    let car = await carsModel.findOne({
      carName: data.carName,
    });

    if (!car) {
      const _id = new mongoose.Types.ObjectId();
      const newCar = new carsModel({
        _id,
        ...data,
      });

      const addedCar = await newCar.save();

      return addedCar;
    } else {
      throw new Error(
        '{"status":"Already Exists", "statusCode":403, "errorMessage":"Car Has Already Been Registered"}'
      );
    }
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while Registering a Car."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};

const getAllCarRepository = async (data: Cars) => {
  try {
    let car = await carsModel.aggregate([
      {
        $lookup: {
          from: "categories",
          localField: "categoryId",
          foreignField: "_id",
          as: "category",
        },
      },
    ]);
    return car;
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while Registering a Car."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};
const updateCarsRepository = async (data: Cars, id: string) => {
  try {
    const doc_id = new mongoose.Types.ObjectId(id);
    let car = await carsModel.findOne({
      _id: doc_id,
    });

    if (car) {
      const { id, ...rest } = data;
      const filter = { _id: doc_id };
      const updateDocument = { $set: rest };

      return await carsModel.updateOne(filter, updateDocument);
    } else {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while updating a Car or car not found"}'
      );
    }
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while updating a Car."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};

const deleteCarsRepository = async (id: string) => {
  try {
    const doc_id = new mongoose.Types.ObjectId(id);
    let car = await carsModel.findOne({
      _id: doc_id,
    });

    if (car) {
      return await carsModel.deleteOne({ _id: doc_id });
    } else {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while updating a Car or car not found"}'
      );
    }
  } catch (err: any) {
    try {
      err = JSON.parse(err.message);
    } catch (err) {
      throw new Error(
        '{"status":"Failed", "statusCode":500, "errorMessage":"Error occurred while updating a Car."}'
      );
    }
    throw new Error(
      `{"status":"${err.status}", "statusCode":${err.statusCode}, "errorMessage":"${err.errorMessage}"}`
    );
  }
};

export {
  createCarsRepository,
  getAllCarRepository,
  updateCarsRepository,
  deleteCarsRepository,
};
