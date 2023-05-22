import axios from 'axios';

const sendPushNotification = async (sensor, userToken, firebaseToken) => {
  try {
    const response = await axios.post(
      process.env.URL_FIREBASE,
      {
        message: {
          token: userToken,
          notification: {
            title: 'Novo Alerta!',
            body: `Sensor ${sensor.sensorHelixDeviceId} esta com atributo (${sensor.sensorHelixAttr}) fora do padrão.`,
          },
          android: {
            notification: {
              image: process.env.URL_LOGO_NOTIFY,
            },
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

    return { data, status };
  } catch (error) {
    console.error(error);
    throw new Error(`SendPushNotification error: ${error}`);
  }
};

export { sendPushNotification };
