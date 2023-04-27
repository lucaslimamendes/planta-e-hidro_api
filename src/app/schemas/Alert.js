export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Alert',
  type: 'object',
  properties: {
    sensorId: {
      description: 'Sensor ID uuid',
      type: 'string',
    },
    value: {
      description: 'Value condition',
      type: 'number',
    },
    lessOrGreater: {
      description: 'Less (0) or greater (1) condition',
      type: 'number',
    },
  },
  required: ['sensorId', 'value', 'lessOrGreater'],
};
