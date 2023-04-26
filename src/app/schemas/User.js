export default {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'User',
  type: 'object',
  properties: {
    name: {
      description: 'Name for user',
      type: 'string',
    },
    email: {
      description: 'The unique identifier for a user',
      type: 'string',
    },
    password: {
      description: 'Password for user',
      type: 'string',
    },
    isActive: {
      description: 'Is active user',
      type: 'boolean',
    },
  },
  required: ['name', 'email', 'password'],
};
