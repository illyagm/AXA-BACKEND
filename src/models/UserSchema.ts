import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';

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