import { Schema, model, Document } from 'mongoose';
import { ISpecificationBase } from './specification';

const OriginatorSchema = new Schema({
    name: String,
    shortName: String,
    standardOriginator: Boolean
});
export interface IOriginatorBase extends Document{
    name: string,
    shortName: string,
    standardOriginator: boolean
}
export interface IOriginator extends ISpecificationBase{
    _id:string
}

export const Originator = model<IOriginator>('Originator', OriginatorSchema, 'Originator');