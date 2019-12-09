
export interface IPolicyRepository {
    getByClientIds( clientIds : string[] ):Promise<any>;
    getByPolicyNumber( policyNumber : string):Promise<any>;
}