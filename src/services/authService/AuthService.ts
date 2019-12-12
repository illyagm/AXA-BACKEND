import { IAuthService } from './IAuthService';
import { IAuthRepository } from '../../repositories/authRepository/IAuthRepository';
import AuthRepository from '../../repositories/authRepository/AuthRepository';


export default class AuthService implements IAuthService {
    private authRepository: IAuthRepository = new AuthRepository();

    public async authUser(username: string, password: string): Promise<any> {
        let user;
        
        if (username){
            //gets the user by username
            user = await this.authRepository.getByUsername(username);
            //check if passwords match
            console.log(user[0].id);
            return await this.checkIfUnencryptedPasswordIsValid(password, user[0].password) ? this.jwtSign(user[0].id, user[0].username) : (false);    
        }

    }    
    public async checkIfUnencryptedPasswordIsValid(unencryptedPassword: string, encryptedPassword:string): Promise<any> {
        return this.authRepository.checkIfUnencryptedPasswordIsValid(unencryptedPassword, encryptedPassword);
    }
    public async jwtSign(userId : string, username : string):Promise<any>{
        return this.authRepository.jwtSign(userId, username);
    }
}