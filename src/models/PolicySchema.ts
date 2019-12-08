import * as mongoose from 'mongoose';
import { Schema } from 'mongoose';

const PoliciesSchema: Schema = new Schema({
    id: String,
    amountInsured: Number,
    email: String,
    inceptionDate: String,
    installmentPayment: Boolean,
    clientId: String
});

export default mongoose.model('Policy', PoliciesSchema);