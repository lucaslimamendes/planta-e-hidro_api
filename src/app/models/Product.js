import { Schema, model } from 'mongoose';

const { Types } = Schema;

const productSchema = new Schema({
    greenhouseId: {
        type: Types.ObjectId,
        ref: 'Greenhouse',
        required: true,
    },
    name: {
        type: Types.String,
        required: true,
    },
    description: {
        type: Types.String,
    },
    quantity: {
        type: Types.Decimal128,
        required: true,
    },
    lastModified: {
        type: Types.Date
    }
});

export default model('Product', productSchema);
