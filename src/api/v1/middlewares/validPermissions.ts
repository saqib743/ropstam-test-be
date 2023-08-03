import { NextFunction, Request, Response } from "express";

const validPermissions = (permissionToCheck: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    let permissionText=permissionToCheck.split('.')
    if (req.body.userPermissions.includes(permissionToCheck))
      next();
    else
      return res.status(401).json({
        status: 401,
        message: "User is not authorized for "+permissionText[0]+" "+permissionText[1]+".",
      });
  };
}


export { validPermissions };
