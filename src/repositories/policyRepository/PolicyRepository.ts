import { IPolicyRepository } from './IPolicyRepository';
import PolicySchema from '../../models/PolicySchema';

export default class PolicyRepository implements IPolicyRepository{
    public async getByClientIds(clientIds: string[]): Promise<any> {
        return PolicySchema.find( {clientId :  clientIds } );
    }
}