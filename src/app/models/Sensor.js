import { Schema, model } from 'mongoose';

const { Types } = Schema;

const sensorSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: 'User',
    required: true,
  },
  sensorHelixId: {
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
