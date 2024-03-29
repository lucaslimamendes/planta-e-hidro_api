import { Validator } from 'jsonschema';
import Alert from '../../models/Alert';
import Sensor from '../../models/Sensor';
import alertSchema from '../../schemas/Alert';
import {
  createSubscription,
  listSubscriptions,
} from '../../services/subscriptions';

export default async (req, res) => {
  try {
    const v = new Validator();
    const resValidate = v.validate(await req.body, alertSchema);

    if (!resValidate.valid) {
      return res.status(412).json({ error: resValidate.toString() });
    }

    const { sensorId, value, lessOrGreater } = await req.body;
    const findSensor = await Sensor.findOne({ _id: sensorId });

    if (!findSensor) {
      return res.status(400).json({ error: 'Sensor not found!' });
    }

    const dtNow = new Date().toISOString();

    await createSubscription(value, lessOrGreater, req.userId, findSensor);

    const subscriptions = await listSubscriptions();
    const subsLen = subscriptions.length;

    const subscription = subscriptions[subsLen - 1];

    const newAlert = await new Alert({
      fiwareSubscriptionId: subscription.id,
      userId: req.userId,
      sensorId,
      value,
      lessOrGreater,
      lastModified: dtNow,
      createdAt: dtNow,
    });
    await newAlert.save();

    return res.status(201).json({ alertId: newAlert._id });
  } catch (error) {
    console.log('createAlert error', error);
    return res.status(500).json({ error: error.toString() });
  }
};
