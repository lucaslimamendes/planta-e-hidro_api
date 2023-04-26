export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Sensor',
  type: 'object',
  properties: {
    sensorHelixId: {
      description: 'Helix id of sensor',
      type: 'string',
    },
    userId: {
      description: 'User ID',
      type: 'string',
    },
  },
  required: ['sensorHelixId', 'userId'],
};
