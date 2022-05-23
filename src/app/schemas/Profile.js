export default {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'Profile',
    type: 'object',
    properties: {
        description: {
            description: 'Name for profile',
            type: 'string'
        },
    },
    required: [ 'description' ]
}
