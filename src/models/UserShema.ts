import { Schema, Document, model } from 'mongoose';
import bcrypt from 'bcrypt';
export interface IUser extends Document {
    id: String;
    username: String;
    password: String;
    role: ['Admin', 'User'];
}

const UserSchema: Schema = new Schema ({
    id: String,
    username: String,
    password: String,
    role: ['Admin', 'User'],
});

export const hashPassword = () =>  {
    this.password = bcrypt.hashSync(this.password, 8);
  }

export const checkIfUnencryptedPasswordIsValid = (unencryptedPassword: string) => {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }

export default model<IUser>("User", UserSchema);