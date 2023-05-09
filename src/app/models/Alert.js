import { Schema } from 'mongoose';
import { dbAPI } from '../../config/database';

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

export default dbAPI.model('Alert', alertSchema);
