import ClientSchema from "../models/ClientSchema";
import { Request, Response, NextFunction } from 'express';

export function roleChecker(req: Request, res: Response, next: NextFunction) {
    const { clientName } = req.body;
    if (!clientName) {
        res.status(403).send("You shall not pass");
    } else {
        return ClientSchema.find({ name: clientName }).then((clientData) => {
            if (clientData[0].role === "admin") {
                next();
            } else {
                res.status(403).send("You shall not pass");
            }
        }).catch((err) => {
            res.status(400).send(err);
        });
    }
}

