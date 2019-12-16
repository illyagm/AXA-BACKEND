import { Request, Response } from 'express';
import { Controller, Middleware, Get } from '@overnightjs/core';
import { IPolicyService } from '../services/policyService/IPolicyService';
import PolicyService from '../services/policyService/PolicyService';
import checkJwt from '../middleware/checkJwt';
import checkRole from '../middleware/checkRole';

@Controller('policy')
export class PolicyController {
    private policyService: IPolicyService = new PolicyService();
    @Middleware([checkJwt, checkRole])
    @Get('getPoliciesByClientName')
    private getPoliciesByClientName(req: Request, res: Response) {
        this.policyService.getByClientName(req.body.name).then((policyData) => {
            res.send(policyData);
        }).catch((err) => {
            res.sendStatus(400).send(err);
        });
    }
}