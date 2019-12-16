export interface IAuthService {
    authUser(username: string, password: string): Promise<any>;
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string, encryptedPassword: string): Promise<any>;
    jwtSign(userId: string, username: string): Promise<any>;
}

