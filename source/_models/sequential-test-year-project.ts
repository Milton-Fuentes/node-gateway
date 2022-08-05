import { Schema, model ,Document} from 'mongoose';

const SequentialTestYearProjectSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client'
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    testNo: { type: Number, default: 2 },
    year: Number
});
export interface ISequentialTestYearProject extends Document{
    clientId: string;
    projectId: string;
    testNo: Number;
    year: Number;
}
export const SequentialTestYearProject = model<ISequentialTestYearProject>('SequentialTestYearProject', SequentialTestYearProjectSchema, 'SequentialTestYearProject');
