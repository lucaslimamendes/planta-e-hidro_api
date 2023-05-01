import { Schema, model } from 'mongoose';

const { Types } = Schema;

const sensorSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sensorHelixDeviceId: {
    type: Types.String,
    required: true,
  },
  sensorHelixEntityId: {
    type: Types.String,
    required: true,
  },
  sensorHelixAttr: {
    type: Types.String,
    required: true,
  },
  lastModified: {
    type: Types.Date,
  },
  createdAt: {
    type: Types.Date,
  },
});

export default model('Sensor', sensorSchema);
