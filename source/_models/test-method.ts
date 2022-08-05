import { Schema, model, Document } from 'mongoose';

const TestMethodSchema = new Schema({
    name: String,
    code: Number,
    useSample: { type: Boolean, default: false },
    used: { type: Boolean, default: false },
    status: {
        active: { type: Boolean, default: true }
    }
});
export interface ITestMethodBase extends Document{
    name: String,
    code: Number,
    useSample: { type: Boolean, default: false },
    used: { type: Boolean, default: false },
    status: {
        active: { type: Boolean, default: true }
    }
}
export const TestMethod = model<ITestMethodBase>('TestMethod', TestMethodSchema, 'TestMethod');
