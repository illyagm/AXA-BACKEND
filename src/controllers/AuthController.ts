import { Controller, Post } from "@overnightjs/core";
import { Request, Response } from 'express';
import { IAuthService } from '../services/authService/IAuthService';
import AuthService from '../services/authService/AuthService';
@Controller('auth')
export class AuthController {
    private authService: IAuthService = new AuthService();
    @Post('login')
    private async login(req: Request, res: Response) {
        let { username, password } = req.body;
        let result;
        if (!(username && password)) {
            res.status(400).send();
        }
        result = await this.authService.authUser(username, password);
        if (!result) {
            res.send('Credentials Error');
        } else {
            res.setHeader('auth', result);
            res.send('Authenticated Successfully');
        }
    }
}