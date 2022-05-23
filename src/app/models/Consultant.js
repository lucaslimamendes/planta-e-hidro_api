import { Schema, model } from 'mongoose';

const { Types } = Schema;

const consultantSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    specialty: {
        type: Types.String,
        required: true,
    },
    carrerResume: {
        type: Types.String,
    },
    lastModified: {
        type: Types.Date
    }
});

export default model('Consultant', consultantSchema);
