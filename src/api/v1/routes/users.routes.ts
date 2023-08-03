import { Router } from "express";
import { createUser, userLogin } from "../controllers/users.controller";
import { authentication } from "../middlewares/auth";

import {
  userLoginValidation,
  addUserValidation,
} from "../validations/users.validations";

const router = Router();

router.post("/signup", addUserValidation, createUser);
router.post("/login", userLoginValidation, userLogin);

export default router;
