import { Schema, Document, model } from 'mongoose';

export interface IClient extends Document{
    id: String;
    name: String;
    email: String;
    role: String;
}

const ClientSchema: Schema = new Schema({
    id: String,
    name: String,
    email: String,
    role: String
});

export default model<IClient>("Client", ClientSchema);