import { Request, Response, NextFunction } from "express";
import  UserSchema  from "../models/UserSchema";

export default async function checkRole (req: Request, res: Response, next: NextFunction) {
    //Set the roles you want to filter
    const roles = ['Admin'];
    //Get the user ID from previous midleware
    const id = res.locals.jwtPayload.id;
    //Get user role from the database
    let user:any;
    try {
      user = await UserSchema.find({_id : id});
    } catch (error) {
      res.status(401).send(error);
    }
    
    //Check if array of authorized roles includes the user's role
    if (roles.indexOf(user[0].role) > -1 && user[0].role === "Admin") next();
    else res.status(401).send('Unauthorized User, you shall not pass!'); 
};