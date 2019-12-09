
export interface IPolicyService {
    getByClientName( clientName : string ):Promise<any[]>;
    getByPolicyNumber( policyNumber : string):Promise<any>;
}