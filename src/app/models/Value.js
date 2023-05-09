import { Schema } from 'mongoose';
import { dbHELIX } from '../../config/database';

const { Types } = Schema;

function dynamicValue(colName) {
  const valueSchema = new Schema({
    attrName: {
      type: Types.String,
      required: true,
    },
    attrType: {
      type: Types.String,
      required: true,
    },
    attrValue: {
      type: Types.String,
      required: true,
    },
    recvTime: {
      type: Types.Date,
      required: true,
    },
  });

  return dbHELIX.model('Value', valueSchema, `sth_/_${colName}`);
}

export { dynamicValue };
