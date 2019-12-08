import { Request, Response } from 'express';
import { Controller, Middleware, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import ClientService from '../services/clientService/ClientService';
import { IClientService } from 'src/services/clientService/IClientService';
@Controller('api')
export class ClientController {
    private clientService:IClientService = new ClientService();

    @Get('getClientById/:clientId')
    private getByClientId(req: Request, res: Response) {
        console.log('polla')
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
        //llamada servicio
    }

    // @Get('/getClientByUsername/:clientName')
    // private getClientByUsername(req: Request, res: Response) {
    //     Logger.Info(req.params.clientName);
    //     return res.status(400).json({
    //         error: req.params.msg,
    //     });
    // }

    // @Get('/getClientByPolicyNumber/:policyNumber')
    // private getClientByPolicyNumber(req: Request, res: Response) {
    //     Logger.Info(req.params.policyNumber);
    //     return res.status(400).json({
    //         error: req.params.msg,
    //     });
    // }
}