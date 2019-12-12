import { IAuthRepository } from './IAuthRepository';
import UserSchema from '../../models/UserSchema';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";
import config from "../../config/config";

export default class AuthRepository implements IAuthRepository {
    public async getByUsername(username: string): Promise<any> {
        return UserSchema.find( {username : username} );
    }    
    public async checkIfUnencryptedPasswordIsValid(unencryptedPassword: string, encryptedPassword:string): Promise<any> {
        return bcrypt.compare(unencryptedPassword, encryptedPassword);
    }
    public async jwtSign(userId: string, username: string):Promise<any> {
        const token = jwt.sign(
            { id: userId, username: username },
            config.jwtSecret,
            { expiresIn: "1h" }
          );
          return token;
    }
}