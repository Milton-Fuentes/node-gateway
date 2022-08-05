import { Schema, model, Model, Document } from 'mongoose';

const SequentialTestProjectSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    testNo: { type: Number, default: 2 }
});
export interface ISequentialTestProject extends Document{
    clientId: string;
    projectId: string;
    testNo: Number;
}
export const SequentialTestProject = model<ISequentialTestProject>('SequentialTestProject', SequentialTestProjectSchema, 'SequentialTestProject');