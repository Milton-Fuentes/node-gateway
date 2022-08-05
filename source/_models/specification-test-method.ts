import { Schema, model, Document } from 'mongoose';

const SpecificationTestMethodSchema = new Schema({
    description: String,
    reference: String,
    code: String,
    testMethodId: {
        type: Schema.Types.ObjectId,
        ref: 'TestMethod'
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    specificationId: {
        type: Schema.Types.ObjectId,
        ref: 'Specification'
    }
});
export interface ISpecificationTestMethodBase extends Document{
    description: String;
    reference: String;
    code: String;
    testMethodId:String;
    categoryId: String;
    specificationId: String;
}
export const SpecificationTestMethod = model<ISpecificationTestMethodBase>('SpecificationTestMethod', SpecificationTestMethodSchema, 'SpecificationTestMethod');
