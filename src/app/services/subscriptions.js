import axios from 'axios';
const { URL_SUBSCRIPTION_FIWARE } = process.env;

const createSubscription = async (value, lessOrGreater, sensorId, userId) => {
  try {
    const response = await axios.post(URL_SUBSCRIPTION_FIWARE, {
      description: 'Notify me of low stock in Store 002',
      subject: {
        entities: [{ idPattern: '.*', type: 'InventoryItem' }],
        condition: {
          attrs: ['shelfCount'],
          expression: { q: 'shelfCount<10;refStore==urn:ngsi-ld:Store:002' },
        },
      },
      notification: {
        http: {
          url: 'http://tutorial:3000/subscription/low-stock-store002',
        },
        attrsFormat: 'keyValues',
      },
    });
    const { data, status } = response;
    console.log(response);

    return { data, status };
  } catch (error) {
    console.error(error);
    throw new Error(`Create subscription error: ${error}`);
  }
};

const deleteSubscription = async subscriptionId => {
  try {
    const response = await axios.delete(
      `${URL_SUBSCRIPTION_FIWARE}/${subscriptionId}`
    );
    const { data, status } = response;
    console.log(response);

    return { data, status };
  } catch (error) {
    console.error(error);
    throw new Error(`Delete subscription error: ${error}`);
  }
};

export { createSubscription, deleteSubscription };
