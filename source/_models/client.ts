import { Schema, model, Document } from 'mongoose';
import { AddressSchema,ContactSchema } from '../_commons/_schemas/schemas';
import { IAddressBase, IContactBase } from '../_interfaces/interfaces';

const ClientSchema = new Schema({
    name: String,
    shortName: String,
    description: String,
    address: AddressSchema,
    contact: ContactSchema
});
export interface IClientBase extends Document{
    name: String;
    shortName: String;
    description: String;
    address: IAddressBase;
    contact: IContactBase;
}
export const Client = model<IClientBase>('Client', ClientSchema, 'Client');
