import { IClientFilter } from 'src/interfaces/filters/IClientFilter';

export default interface IClientRepository {
    getById(id: string):any;
    getBy(filter:IClientFilter):Promise<any[]>
}