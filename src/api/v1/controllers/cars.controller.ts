import { RequestHandler } from "express";
import { response, errorResponse } from "../helpers/responses";

import {
  createCarsService,
  deleteCarsService,
  getAllCarsService,
  updateCarsService,
} from "../services/cars.service";

const createCars: RequestHandler = async (req, res, next) => {
  try {
    const user = await createCarsService(req.body);
    response(res, "Cars Registered", 201, {
      user,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};

const getCars: RequestHandler = async (req, res, next) => {
  try {
    let cars = await getAllCarsService(req.body);

    response(res, "Cars Sent", 201, {
      cars,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};
const updateCars: RequestHandler = async (req, res, next) => {
  try {
    const cars = await updateCarsService(req.body, req.params.id);
    response(res, "Cars updated", 201, {
      cars,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};
const deleteCars: RequestHandler = async (req, res, next) => {
  try {
    const cars = await deleteCarsService(req.params.id);
    response(res, "Cars deleted", 201, {
      cars,
    });
  } catch (err: any) {
    errorResponse(res, err);
  }
};

export { createCars, getCars, updateCars, deleteCars };
