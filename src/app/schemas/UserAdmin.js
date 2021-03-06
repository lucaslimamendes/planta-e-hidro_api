export default {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'User',
    type: 'object',
    properties: {
        name: {
            description: 'Name for user',
            type: 'string'
        },
        email: {
            description: 'The unique identifier for a user',
            type: 'string'
        },
        password: {
            description: 'Password for user',
            type: 'string'
        },
        profileName: {
            description: 'profileName for user',
            type: 'string'
        }
    },
    required: [ 'name', 'email', 'password', 'profileName' ]
}
