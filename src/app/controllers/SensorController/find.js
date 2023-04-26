import Sensor from '../../models/Sensor';

export default async (req, res) => {
  try {
    const findSensor = await Sensor.findOne({
      _id: await req.params.id.toString(),
    });

    return res.json(findSensor);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};
