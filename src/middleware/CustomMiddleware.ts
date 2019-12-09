import ClientSchema from "../models/ClientSchema";
import { Request, Response, NextFunction } from 'express';

export function roleChecker (req: Request, res: Response, next: NextFunction) {
        const { clientName } = req.body;
        console.log(clientName);
        return ClientSchema.find({name : clientName}).then((clientData) => {
            if (clientData[0].role === "admin"){
                next();
            } else {
                res.status(403).send("Acceso Restringido");
            }
        }).catch((err) => {
            res.status(400).send(err);
         });  
}   

  