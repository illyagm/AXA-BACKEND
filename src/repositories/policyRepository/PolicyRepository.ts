import { IPolicyRepository } from './IPolicyRepository';
import PolicySchema from '../../models/PolicySchema';

export default class PolicyRepository implements IPolicyRepository {
    public async getByPolicyNumber(policyNumber: string): Promise<any> {
        return PolicySchema.find({ id: policyNumber });
    }
    public async getByClientIds(clientIds: string[]): Promise<any> {
        return PolicySchema.find({ clientId: clientIds });
    }
}