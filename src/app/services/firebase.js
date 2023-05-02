import axios from 'axios';

const sendPushNotification = async (sensor, userToken, firebaseToken) => {
  try {
    const response = await axios.post(
      process.env.URL_FIREBASE,
      {
        message: {
          token: userToken,
          notification: {
            title: 'Alerta!',
            body: `Sensor ${sensor.sensorHelixDeviceId} esta com atributo (${sensor.sensorHelixAttr}) fora do padrão.`,
          },
        },
      },
      {
        headers: {
          Authorization: `Bearer ${firebaseToken}`,
        },
      }
    );
    const { data, status } = response;
    console.log(response);

    return { data, status };
  } catch (error) {
    console.error(error);
    throw new Error(`SendPushNotification error: ${error}`);
  }
};

export { sendPushNotification };
