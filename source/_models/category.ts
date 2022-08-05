import { Schema, model, Document } from 'mongoose';

export const CategorySchema = new Schema({
    name: String,
    shortName: String,
    code: String
});
export interface ICategoryBase extends Document{
    name: String;
    shortName: String;
    code: String;
}
export const Category = model<ICategoryBase>('Category', CategorySchema, 'Category');