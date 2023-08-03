import { Router } from "express";
import { addCarsValidation } from "../validations/cars.validations";
import {
  createCars,
  deleteCars,
  getCars,
  updateCars,
} from "../controllers/cars.controller";

const router = Router();

router.post("/create", addCarsValidation, createCars);
router.get("/", getCars);
router.patch("/:id", updateCars);
router.delete("/:id", deleteCars);

export default router;
