import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    username: String;
    password: String;
    role: String;
}

const UserSchema: Schema = new Schema ({
    username: String,
    password: String,
    role: String,
});

export default model<IUser>("User", UserSchema);