import { Schema, model, Document } from 'mongoose';

const TestMethodClientSchema = new Schema({
    nameByClient: String,
    testMethodId: {
        type: Schema.Types.ObjectId,
        ref: 'TestMethod'
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    }
});
export interface ITestMethodClientBase extends Document {
    nameByClient: String;
    testMethodId: String;
    clientId: String;
}
export const TestMethodClient = model<ITestMethodClientBase>('TestMethodClient', TestMethodClientSchema, 'TestMethodClient');
