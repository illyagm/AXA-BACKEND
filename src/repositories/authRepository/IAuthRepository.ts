export interface IAuthRepository {
    getByUsername(username: string):Promise<any>;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string, encryptedPassword:string):Promise<any>;
    jwtSign(userId : string, username : string):Promise<any>;
}