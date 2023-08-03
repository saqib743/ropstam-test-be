import { Router } from "express";
import { addCarsValidation } from "../validations/cars.validations";
import {
  createCars,
  deleteCars,
  getCars,
  updateCars,
} from "../controllers/cars.controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.post("/create", authentication(), addCarsValidation, createCars);
router.get("/", authentication(), getCars);
router.patch("/:id", authentication(), updateCars);
router.delete("/:id", authentication(), deleteCars);

export default router;
