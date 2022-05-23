import { Schema, model } from 'mongoose';

const { Types } = Schema;

const greenhouseSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: Types.String,
        required: true,
    },
    channelQty: {
        type: Types.Number,
        required: true,
    },
    address: {
        type: Types.String
    },
    lastModified: {
        type: Types.Date
    }
});

export default model('Greenhouse', greenhouseSchema);
