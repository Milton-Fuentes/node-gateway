import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    token: String,
});
export const User = model('User', userSchema, 'User');
