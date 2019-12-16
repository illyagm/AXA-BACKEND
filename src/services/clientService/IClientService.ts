import { IClientFilter } from '../../interfaces/filters/IClientFilter';
import { IClient } from '../../models/ClientSchema';

export interface IClientService {
    getById(id: string): Promise<IClient>;
    getBy(filter: IClientFilter): Promise<any[]>;
    getByPolicyNumber(policyNumber: string): Promise<IClient>;
}