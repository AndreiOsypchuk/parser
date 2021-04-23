import mongoose from 'mongoose';

interface UserSchema {
  _id: string;
  username: string;
  hash: string;
  modules: string[];
}

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  modules: { type: [String], required: true, default: [] },
});

userSchema.virtual('info').get(function (this: UserSchema) {
  return {
    id: this._id,
    username: this.username,
    modules: this.modules,
  };
});

export const User = mongoose.model('User', userSchema);
