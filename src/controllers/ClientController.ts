import { Request, Response } from 'express';
import { Controller, Middleware, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import ClientService from '../services/clientService/ClientService';
import { IClientService } from '../services/clientService/IClientService';
import checkJwt from '../middleware/checkJwt';
import checkRole  from '../middleware/checkRole';

@Controller('client')
export class ClientController {
    private clientService:IClientService = new ClientService();
    @Get('getClientById/:clientId')
    private getByClientId(req: Request, res: Response) {
        Logger.Info(req.params.clientId);
        this.clientService.getById(req.params.clientId).then((clientData) => {
            res.send(clientData);
        });
    }
    
    @Get('getClientBy')
    private getBy(req: Request, res: Response) {
        Logger.Info(req.body);
        this.clientService.getBy(req.body).then((clientData) => {
            res.send(clientData);
        });
    }
    @Middleware([checkJwt, checkRole])
    @Get('getClientByPolicyNumber')
    private getClientByPolicyNumber(req: Request, res: Response) {
        Logger.Info(req.body.policyNumber);
        this.clientService.getByPolicyNumber(req.body.policyNumber).then((clientData) => {
            res.send(clientData);
        }).catch((err) => {
            res.sendStatus(400).send(err);
        });
    }
}