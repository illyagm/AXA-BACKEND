import { IClientFilter } from '../../interfaces/filters/IClientFilter';

export default interface IClientRepository {
    getById(id : string):any;
    getByPolicyNumber(policyNumber : string):Promise<any>;
    getBy(filter : IClientFilter):Promise<any[]>
}