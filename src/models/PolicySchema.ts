import { Schema, Document, model } from 'mongoose';

export interface IPolicy extends Document{
    id: String;
    amountInsured: Number;
    email: String;
    inceptionDate: String;
    installmentPayment: Boolean;
    clientId: String;
}

const PolicySchema: Schema = new Schema({
    id: String,
    amountInsured: Number,
    email: String,
    inceptionDate: String,
    installmentPayment: Boolean,
    clientId: String,
});

export default model<IPolicy>("Policy", PolicySchema);