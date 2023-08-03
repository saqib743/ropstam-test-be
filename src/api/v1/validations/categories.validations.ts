import { body, validationResult, param } from "express-validator";
import { RequestHandler } from "express";

const addCategoryValidation: RequestHandler = async (req, res, next) => {
  await body("categoryName").isLength({ min: 2, max: 30 }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      error: {
        status: "Invalid Data",
        statusCode: 422,
        errorMessage: "Data Sent is not valid",
        errors: errors.array(),
      },
      message: "Data Sent is not valid",
    });
  } else {
    next();
  }
};

export { addCategoryValidation };
