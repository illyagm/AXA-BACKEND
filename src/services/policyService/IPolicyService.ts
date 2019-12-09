import { IPolicyFilter } from 'src/interfaces/filters/IPolicyFilter';

export interface IPolicyService {
    getByClientName( clientName : string ):Promise<any[]>;
    getByPolicyNumber( policyNumber : string):Promise<any>;
}