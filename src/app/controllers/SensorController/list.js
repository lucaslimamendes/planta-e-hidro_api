import Sensor from '../../models/Sensor';

export default async (req, res) => {
  try {
    const findSensor = await Sensor.find({
      userId: await req.params.userId.toString(),
    });

    return res.json(findSensor);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
