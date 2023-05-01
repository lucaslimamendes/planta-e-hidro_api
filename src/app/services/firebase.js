import axios from 'axios';
const { URL_FIREBASE, FIREBASE_TOKEN } = process.env;

const sendPushNotification = async (sensor, userToken) => {
  try {
    const response = await axios.post(
      URL_FIREBASE,
      {
        to: userToken,
        direct_boot_ok: true,
        notification: {
          title: 'Alerta!',
          body: `Sensor ${sensor.sensorHelixDeviceId} esta com atributo (${sensor.sensorHelixAttr}) fora do padrão.`,
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `key=${FIREBASE_TOKEN}`,
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
