import { Schema, model, Document } from 'mongoose';
import { ICreatedBase, ILastModBase } from '../_interfaces/interfaces';

import { CreatedSchema, LastModSchema } from '../_commons/_schemas/schemas';


const GenericTestSchema = new Schema({
    created: CreatedSchema,
    lastMod: LastModSchema,
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    labId: {
        type: Schema.Types.ObjectId,
        ref: 'Lab'
    },
    specificationTestMethod: {
        specificationTmId: {
            type: Schema.Types.ObjectId,
            ref: 'SpecificationtestMethod'
        },
        code: String
    },
    remarks: String,
    testNo: Number,
    sequentialPno: Number,
    sequentialYearPno: Number,
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
    name: String,
    status: String
});
export interface IGenericTest extends Document {

    created: ICreatedBase,
    lastMod: ILastModBase,
    projectId: String,
    labId: String,
    specificationTestMethod: {
        specificationTmId: String,
        code: String
    },
    remarks: String,
    testNo: Number,
    sequentialPno: Number,
    sequentialYearPno: Number,
    active: { type: Boolean, default: true },
    deleted: { type: Boolean, default: false },
    name: String,
    status: String
}

export const GenericTest = model<IGenericTest>('GenericTest', GenericTestSchema, 'GenericTest');
