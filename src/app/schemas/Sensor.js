export default {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'Sensor',
    type: 'object',
    properties: {
        greenhouseId: {
            description: 'Greenhouse id of sensor',
            type: 'string'
        },
        description: {
            description: 'Description of sensor',
            type: 'string'
        },
        unit: {
            description: 'Unit of sensor',
            type: 'string'
        }
    },
    required: [ 'greenhouseId', 'description', 'unit' ]
}
