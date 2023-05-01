export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Sensor',
  type: 'object',
  properties: {
    sensorHelixDeviceId: {
      description: 'Helix Device id of sensor',
      type: 'string',
    },
    sensorHelixEntityId: {
      description: 'Helix Entity id of sensor',
      type: 'string',
    },
    sensorHelixAttr: {
      description: 'Helix Attr of sensor',
      type: 'string',
    },
  },
  required: ['sensorHelixDeviceId', 'sensorHelixEntityId', 'sensorHelixAttr'],
};
