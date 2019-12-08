import { Request, Response } from 'express';
import { Controller, Middleware, Get } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { IPolicyService } from '../services/policyService/IPolicyService';
import PolicyService from '../services/policyService/PolicyService';

@Controller('policy')
export class PolicyController {
    
    private policyService: IPolicyService = new PolicyService();

    @Get('getPoliciesByClientName')
    private getPoliciesByClientName(req: Request, res: Response) {
        Logger.Info(req.body.name);
        this.policyService.getByClientName(req.body.name).then((policyData) => {
            res.send(policyData);
        }).catch((err) => {
            res.sendStatus(400).send(err);
        });
    }
}