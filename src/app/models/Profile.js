import { Schema, model } from 'mongoose';

const { Types } = Schema;

const profileSchema = new Schema({
    description: {
        type: Types.String,
        required: true,
    },
    lastModified: {
        type: Types.Date
    }
});

export default model('Profile', profileSchema);
