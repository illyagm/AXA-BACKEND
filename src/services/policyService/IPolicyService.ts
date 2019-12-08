
export interface IPolicyService {
    getByClientName( clientName : string ):Promise<any[]>;
}