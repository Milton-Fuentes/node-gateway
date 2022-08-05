import { Schema, model, Document } from 'mongoose';

const SpecificationSchema = new Schema({
    _id:{type:Schema.Types.ObjectId},
    name: String,
    reference: String,
    originatorId: {
        type: Schema.Types.ObjectId,
        ref: 'Originator'
    }
});

export interface ISpecificationBase extends Document {
    name: String;
    reference: String;
    originatorId: String;
}
export const Specification = model<ISpecificationBase>('Specification', SpecificationSchema, 'Specification');
