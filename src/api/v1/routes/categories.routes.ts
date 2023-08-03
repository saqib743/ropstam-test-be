import { Router } from "express";

import { addCategoryValidation } from "../validations/categories.validations";
import {
  createCategory,
  deleteCategories,
  getCategories,
  updateCategories,
} from "../controllers/categories.controller";

const router = Router();

router.post("/create", addCategoryValidation, createCategory);
router.get("/", getCategories);
router.patch("/:id", updateCategories);
router.delete("/:id", deleteCategories);

export default router;
