import { IClientFilter } from 'src/interfaces/filters/IClientFilter';

export interface IClientService {
    getById(id: string):Promise<any>;
    getBy(filter:IClientFilter):Promise<any[]>;
}