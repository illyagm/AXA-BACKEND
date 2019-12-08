
export interface IPolicyRepository {
    getByClientIds( clientIds : string[] ):Promise<any>;
}