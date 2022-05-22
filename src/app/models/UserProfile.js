import { Schema, model } from 'mongoose';

const { Types } = Schema;

const userProfileSchema = new Schema({
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: true,
    },
    profileId: {
        type: Types.ObjectId,
        ref: 'Profile',
        required: true,
    },
    lastModified: {
        type: Types.Date
    }
});

export default model('UserProfile', userProfileSchema);
