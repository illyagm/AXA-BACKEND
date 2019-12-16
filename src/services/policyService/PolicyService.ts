import { IPolicyService } from './IPolicyService';
import { IPolicyRepository } from '../../repositories/policyRepository/IPolicyRepository';
import PolicyRepository from '../../repositories/policyRepository/PolicyRepository';
import { IClientFilter } from '../../interfaces/filters/IClientFilter';
import ClientService from '../clientService/ClientService';
import { IClientService } from '../clientService/IClientService';

export default class PolicyService implements IPolicyService {

    private policyRepository: IPolicyRepository = new PolicyRepository();
    
    public async getByPolicyNumber(policyNumber: string): Promise<any> {
        return this.policyRepository.getByPolicyNumber(policyNumber);
    }
    
    public async getByClientName(clientName: string): Promise<any> {
        const clientService: IClientService = new ClientService();
        let filter: IClientFilter = { name: clientName };
        return clientService.getBy(filter).then((clientData) => {
            let clients: string[] = clientData.map((item) => { return item.id });
            return this.policyRepository.getByClientIds(clients);
        });
    }
}