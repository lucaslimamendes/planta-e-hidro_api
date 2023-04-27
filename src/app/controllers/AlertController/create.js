import { Validator } from 'jsonschema';
import Alert from '../../models/Alert';
import alertSchema from '../../schemas/Alert';

export default async (req, res) => {
  try {
    const v = new Validator();
    const resValidate = v.validate(await req.body, alertSchema);

    if (!resValidate.valid) {
      return res.status(412).json({ error: resValidate.toString() });
    }

    const { sensorId, value, lessOrGreater } = await req.body;
    const dtNow = new Date().toISOString();

    // TO DO (CREATE SUBSCRIPTION SERVICE - fiwareSubscriptionId)

    const newAlert = await new Alert({
      fiwareSubscriptionId,
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
