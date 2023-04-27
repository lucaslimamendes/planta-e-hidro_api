import { Validator } from 'jsonschema';
import Sensor from '../../models/Sensor';
import sensorSchema from '../../schemas/Sensor';

export default async (req, res) => {
  try {
    const v = new Validator();
    const resValidate = v.validate(await req.body, sensorSchema);

    if (!resValidate.valid) {
      return res.status(412).json({ error: resValidate.toString() });
    }

    const { sensorHelixId } = await req.body;
    const dtNow = new Date().toISOString();

    const newSensor = await new Sensor({
      userId: req.userId,
      sensorHelixId,
      lastModified: dtNow,
      createdAt: dtNow,
    });
    await newSensor.save();

    return res.status(201).json({ sensorId: newSensor._id });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
