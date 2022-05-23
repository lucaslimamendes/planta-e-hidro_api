export default {
    $schema: 'http://json-schema.org/draft-04/schema#',
    title: 'Product',
    type: 'object',
    properties: {
        greenhouseId: {
            description: 'Greenhouse id of product',
            type: 'string'
        },
        name: {
            description: 'Name of product',
            type: 'string'
        },
        quantity: {
            description: 'Quantity of product',
            type: 'number'
        }
    },
    required: [ 'greenhouseId', 'name', 'quantity' ]
}
