import { Router } from "express";

import { addCategoryValidation } from "../validations/categories.validations";
import {
  createCategory,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../controllers/categories.controller";
import { authentication } from "../middlewares/auth";

const router = Router();

router.post("/create", authentication(), addCategoryValidation, createCategory);
router.get("/", authentication(), getCategories);
router.patch("/:id", authentication(), updateCategories);
router.delete("/:id", authentication(), deleteCategories);

export default router;
