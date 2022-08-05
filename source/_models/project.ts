import { Schema, model, Document } from 'mongoose';
import { AddressSchema } from '../_commons/_schemas/schemas';
import { IAddressBase } from '../_interfaces/interfaces';

const ProjectSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    name: String,
    shortName: String,
    description: String,
    address: AddressSchema
});
export interface IProjectBase extends Document {
    clientId: String,
    name: String,
    shortName: String,
    description: String,
    address: IAddressBase
}
export const Project = model<IProjectBase>('Project', ProjectSchema, 'Project');
