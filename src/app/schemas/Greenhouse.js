export default {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'Greenhouse',
    type: 'object',
    properties: {
        userId: {
            description: 'User id of greenhouse',
            type: 'string'
        },
        name: {
            description: 'Name of greenhouse',
            type: 'string'
        },
        channelQty: {
            description: 'Channel quantity of greenhouse',
            type: 'number'
        }
    },
    required: [ 'userId', 'name', 'channelQty' ]
}
