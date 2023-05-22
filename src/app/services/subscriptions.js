import axios from 'axios';

const createSubscription = async (value, lessOrGreater, userId, sensor) => {
  try {
    const sinal = lessOrGreater ? '>' : '<';
    const { sensorHelixEntityId, sensorHelixAttr, _id } = sensor;
    let newAttr = sensorHelixAttr;

    if (sensorHelixAttr === 'temperature') {
      newAttr =
        sensorHelixAttr.charAt(0).toUpperCase() + sensorHelixAttr.slice(1);
    }

    const response = await axios.post(
      process.env.URL_SUBSCRIPTION_FIWARE,
      {
        description: `Notify me of ${sensorHelixEntityId} ${newAttr} ${lessOrGreater} ${value}`,
        subject: {
          entities: [{ id: sensorHelixEntityId }],
          condition: {
            attrs: [newAttr],
            expression: { q: `${newAttr}${sinal}'${value}'` },
          },
        },
        notification: {
          http: {
            url: `${process.env.URL_CALLBACK_SUBSCRIPTION}/${userId}/${_id}`,
          },
          // attrsFormat: 'keyValues',
        },
      },
      {
        headers: {
          'fiware-service': process.env.FIWARE_SERVICE_HEADER,
          'fiware-servicepath': '/',
        },
      }
    );
    const { status } = response;

    return { status };
  } catch (error) {
    console.error(error);
    throw new Error(`Create subscription error: ${error}`);
  }
};

const deleteSubscription = async subscriptionId => {
  try {
    const response = await axios.delete(
      `${process.env.URL_SUBSCRIPTION_FIWARE}/${subscriptionId}`,
      {
        headers: {
          'fiware-service': process.env.FIWARE_SERVICE_HEADER,
          'fiware-servicepath': '/',
        },
      }
    );
    const { data, status } = response;
    console.log(response);

    return { data, status };
  } catch (error) {
    console.error(error);
    throw new Error(`Delete subscription error: ${error}`);
  }
};

const listSubscriptions = async () => {
  try {
    const response = await axios.get(`${process.env.URL_SUBSCRIPTION_FIWARE}`, {
      headers: {
        'fiware-service': process.env.FIWARE_SERVICE_HEADER,
        'fiware-servicepath': '/',
      },
    });
    const { data } = response;

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`List subscription error: ${error}`);
  }
};

export { createSubscription, deleteSubscription, listSubscriptions };
