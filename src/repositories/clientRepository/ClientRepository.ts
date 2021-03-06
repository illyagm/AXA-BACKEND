import IClientRepository from './IClientRepository';
import { IClientFilter } from '../../interfaces/filters/IClientFilter';
import ClientSchema from '../../models/ClientSchema';

export default class ClientRepository implements IClientRepository {
    public async getByPolicyNumber(policyNumber: string) {
        return ClientSchema.find({ id: policyNumber })
    }
    public async getById(id: string): Promise<any> {
        return ClientSchema.find({ id: id });
    }
    public async getBy(filter: IClientFilter): Promise<any[]> {
        return ClientSchema.find(filter);
    }
}