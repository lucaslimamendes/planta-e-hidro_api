import { Schema, model } from 'mongoose';

const { Types } = Schema;

const alertSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sensorId: {
    type: Types.ObjectId,
    ref: 'Sensor',
    required: true,
  },
  fiwareSubscriptionId: {
    type: Types.String,
    required: true,
    unique: true,
  },
  value: {
    type: Types.Number,
    required: true,
  },
  lessOrGreater: {
    type: Types.Number,
    required: true,
    min: 0,
    max: 1,
  },
  lastSend: {
    type: Types.Date,
  },
  lastModified: {
    type: Types.Date,
  },
  createdAt: {
    type: Types.Date,
  },
});

export default model('Alert', alertSchema);
