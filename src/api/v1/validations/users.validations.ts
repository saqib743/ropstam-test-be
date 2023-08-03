import { body, validationResult, param } from "express-validator";
import { RequestHandler } from "express";

const addUserValidation: RequestHandler = async (req, res, next) => {
  await body("email")
    .isLength({ min: 8, max: 30 })
    .not()
    .contains(" ")
    .run(req);

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

const userLoginValidation: RequestHandler = async (req, res, next) => {
  await body("email")
    .isLength({ min: 6, max: 30 })
    .not()
    .contains(" ")
    .run(req);
  await body("password")
    .isLength({ min: 8, max: 30 })
    .not()
    .contains(" ")
    .run(req);
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

export { addUserValidation, userLoginValidation };
