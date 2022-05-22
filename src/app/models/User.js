import { Schema, model } from 'mongoose';

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
    phone: {
        type: Types.String
    },
    address: {
        type: Types.String
    },
    city: {
        type: Types.String
    },
    state: {
        type: Types.String
    },
    country: {
        type: Types.String
    },
    lastModified: {
        type: Types.Date
    }
});

export default model('User', userSchema);
