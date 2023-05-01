import { Validator } from 'jsonschema';
import Alert from '../../models/Alert';
import Sensor from '../../models/Sensor';
import alertSchema from '../../schemas/Alert';
import { createSubscription } from '../../services/subscriptions';

export default async (req, res) => {
  try {
    const v = new Validator();
    const resValidate = v.validate(await req.body, alertSchema);

    if (!resValidate.valid) {
      return res.status(412).json({ error: resValidate.toString() });
    }

    const findSensor = await Sensor.findOne({ _id: sensorId });
    if (!findSensor) {
      return res.status(400).json({ error: 'Sensor not found!' });
    }

    const { sensorId, value, lessOrGreater } = await req.body;
    const dtNow = new Date().toISOString();

    const subscription = await createSubscription(
      value,
      lessOrGreater,
      req.userId,
      findSensor
    );

    const newAlert = await new Alert({
      fiwareSubscriptionId: subscription.subscriptionId,
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
    return res.status(500).json({ error: error.toString() });
  }
};
