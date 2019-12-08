import { IClientService } from './IClientService';
import { IClientFilter } from '../../interfaces/filters/IClientFilter';
import ClientRepository from '../../repositories/clientRepository/ClientRepository';
import IClientRepository from 'src/repositories/clientRepository/IClientRepository';
import Util from 'src/shared/Util';
export default class ClientService implements IClientService{

    private clientRepository:IClientRepository=new ClientRepository();

    public getById(id: string): any {
        return this.clientRepository.getById(id);
    }   
    public async getBy(filter: IClientFilter): Promise<any[]> {
        return this.clientRepository.getBy(filter);
    }
}

