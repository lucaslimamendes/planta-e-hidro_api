export default {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'Consultant',
    type: 'object',
    properties: {
        userId: {
            description: 'User id of consultant',
            type: 'string'
        },
        specialty: {
            description: 'Specialty of consultant',
            type: 'string'
        }
    },
    required: [ 'userId', 'specialty' ]
}
