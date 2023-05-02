import Sensor from '../../models/Sensor';
import Alert from '../../models/Alert';
import User from '../../models/User';
import { sendPushNotification } from '../../services/firebase';
import getFirebaseToken from '../../helpers/firebaseToken';

export default async (req, res) => {
  try {
    const { subscriptionId, data } = await req.body;
    const userId = req.params.userId.toString();
    const sensorId = req.params.sensorId.toString();

    if (!subscriptionId || !data[0]) {
      return res.status(412).json({ error: 'Payload invalid' });
    }

    const findSensor = await Sensor.findOne({
      _id: sensorId,
    });
    const findUser = await User.findOne({
      _id: userId,
    });
    const findAlert = await Alert.findOne({
      fiwareSubscriptionId: subscriptionId,
    });

    if (!findSensor || !findUser || !findAlert || !findUser.notifyToken) {
      return res
        .status(412)
        .json({ error: 'Sensor, user or alert not found!' });
    }

    const firebaseToken = await getFirebaseToken();

    await sendPushNotification(findSensor, findUser.notifyToken, firebaseToken);

    findAlert.lastSend = new Date().toISOString();

    await findAlert.save();

    return res.status(201).json({});
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
