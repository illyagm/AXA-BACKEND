import { Request, Response, NextFunction } from "express";
import  UserSchema  from "../models/UserShema";

export const checkRole = (roles: Array<string>) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.userId;
    let user;
    //Get user role from the database
    try {
    user = UserSchema.find({id : id});
    } catch (error) {
      res.status(401).send(error);
    }

    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(user.role) > -1 && user.role === "Admin") next();
    else res.status(401).send();
  };
};