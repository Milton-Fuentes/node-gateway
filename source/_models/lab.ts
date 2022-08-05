import { Schema, model, Document } from 'mongoose';
import { ICreatedBase, ILastModBase, IAddressBase, IContactBase, IScheduleBase } from '../_interfaces/interfaces';
import { AddressSchema, ContactSchema, CreatedSchema, LastModSchema, ScheduleSchema } from '../_commons/_schemas/schemas';

const LabSchema = new Schema({
    name: String,
    shortName: String,
    description: String,
    labType: String,
    tbpeRegistrationNo: Number,
    folderId: String,
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    address: AddressSchema,
    contact: ContactSchema,
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
    created: CreatedSchema,
    lastMod: LastModSchema,
    schedule: [{
        rushHourBegin: ScheduleSchema,
        rushHourEnd: ScheduleSchema,
    }],
    labFunctions: [{
        name: String,
        description: String,
        projectType: String
    }]
});
export interface ILabBase extends Document {
    name: String,
    shortName: String,
    description: String,
    labType: String,
    tbpeRegistrationNo: Number,
    folderId: String,
    clientId: String,
    address: IAddressBase,
    contact: IContactBase,
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
    created: ICreatedBase,
    lastMod: ILastModBase,
    schedule: [{
        rushHourBegin: IScheduleBase,
        rushHourEnd: IScheduleBase,
    }],
    labFunctions: [{
        name: String,
        description: String,
        projectType: String
    }]
}
export const Lab = model<ILabBase>('Lab', LabSchema, 'Lab');