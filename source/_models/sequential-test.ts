import { Schema, model,Model,Document } from 'mongoose';
//import { ISequentialTest } from '../_interfaces/sequential-test-interface';

const SequentialTestSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    testNo: { type: Number, default: 2 }
});
export interface ISequentialTest extends Document{
    clientId: string;
    testNo: Number;
}
export const SequentialTest = model<ISequentialTest>('SequentialTest', SequentialTestSchema, 'SequentialTest');