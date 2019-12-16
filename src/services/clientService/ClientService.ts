import { IClientService } from './IClientService';
import { IClientFilter } from '../../interfaces/filters/IClientFilter';
import ClientRepository from '../../repositories/clientRepository/ClientRepository';
import IClientRepository from '../../repositories/clientRepository/IClientRepository';
import { IPolicyService } from '../policyService/IPolicyService';
import PolicyService from '../policyService/PolicyService';
export default class ClientService implements IClientService {

    private clientRepository: IClientRepository = new ClientRepository();
    public async getByPolicyNumber(policyNumber: string): Promise<any> {
        const policyService: IPolicyService = new PolicyService();
        return policyService.getByPolicyNumber(policyNumber).then((policyData) => {
            return this.clientRepository.getById(policyData[0].clientId);
        });
    }
    public getById(id: string): any {
        return this.clientRepository.getById(id);
    }
    public async getBy(filter: IClientFilter): Promise<any[]> {
        return this.clientRepository.getBy(filter);
    }
}

