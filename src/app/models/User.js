import { Schema } from 'mongoose';
import { dbAPI } from '../../config/database';

const { Types } = Schema;

const userSchema = new Schema({
  name: {
    type: Types.String,
    required: true,
  },
  password: {
    type: Types.String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  notifyToken: {
    type: Types.String,
  },
  isActive: {
    type: Types.Boolean,
    required: true,
    default: true,
  },
  lastModified: {
    type: Types.Date,
  },
  createdAt: {
    type: Types.Date,
  },
});

export default dbAPI.model('User', userSchema);
