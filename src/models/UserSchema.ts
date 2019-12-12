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

export const hashPassword = () =>  {
  this.password = bcrypt.hashSync(this.password, 8);
}

export const checkIfUnencryptedPasswordIsValid = (unencryptedPassword: string) => {
  return bcrypt.compareSync(unencryptedPassword, this.password);
}

export default model<IUser>("User", UserSchema);