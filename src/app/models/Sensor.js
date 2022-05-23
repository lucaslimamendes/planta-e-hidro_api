import { Schema, model } from 'mongoose';

const { Types } = Schema;

const sensorSchema = new Schema({
    greenhouseId: {
        type: Types.ObjectId,
        ref: 'Greenhouse',
        required: true,
    },
    description: {
        type: Types.String,
        required: true,
    },
    unit: {
        type: Types.String,
        required: true,
    },
    value: {
        type: Types.Decimal128,
    },
    max: {
        type: Types.Decimal128,
    },
    min: {
        type: Types.Decimal128,
    },
    lastModified: {
        type: Types.Date
    }
});

export default model('Sensor', sensorSchema);
