import IClientRepository from './IClientRepository';
import { IClientFilter } from 'src/interfaces/filters/IClientFilter';
import { json } from 'body-parser';
import ClientSchema, { IClient } from '../../models/ClientSchema';

export default class ClientRepository implements IClientRepository{
    public async getByPolicyNumber(policyNumber: string) {
        return ClientSchema.find( {id : policyNumber})
    }
    public async getById(id: string): Promise<any> {
        return ClientSchema.find( {id : id});
    }    
    public async getBy(filter:IClientFilter): Promise<any[]> {
        return ClientSchema.find(filter);
    }

    
}