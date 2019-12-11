import { Request, Response } from 'express';
import { Controller, Middleware, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { IPolicyService } from '../services/policyService/IPolicyService';
import PolicyService from '../services/policyService/PolicyService';
import { roleChecker } from '../middleware/customMiddleware';


@Controller('user')

export class UserController {
    //private userService:IUserService = new UserService();

}
/*
  router.get("/", [checkJwt, checkRole(["ADMIN"])], UserController.listAll);

  // Get one user
  router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.getOneById
  );

  //Create a new user
  router.post("/", [checkJwt, checkRole(["ADMIN"])], UserController.newUser);

  //Edit one user
  router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.editUser
  );

  //Delete one user
  router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    UserController.deleteUser
  );
*/