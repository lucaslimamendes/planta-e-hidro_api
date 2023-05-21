import { dynamicValue } from '../../models/Value';
import Sensor from '../../models/Sensor';

export default async (req, res) => {
  try {
    const helixDeviceId = req.params.helixDeviceId.toString();
    const { startDate, endDate } = req.query;
    let limitDefault = 40;

    const stDt = startDate ? new Date(startDate) : new Date();
    const ndDt = endDate ? new Date(endDate) : new Date();

    if (!startDate) {
      stDt.setDate(stDt.getDate() - 1);
    }

    const findSensor = await Sensor.findOne({
      userId: await req.userId,
      sensorHelixDeviceId: helixDeviceId,
    });

    const { sensorHelixEntityId, sensorHelixEntityType, sensorHelixAttr } =
      findSensor;

    const Value = dynamicValue(
      `${sensorHelixEntityId}_${sensorHelixEntityType}`
    );

    const filters = {
      attrName: {
        $regex: new RegExp('^' + sensorHelixAttr.toLowerCase(), 'i'),
      },
    };

    if (startDate) {
      filters.recvTime = { $gte: stDt, $lte: ndDt };
      limitDefault = 400;
    }

    const findValues = await Value.find(filters)
      .sort({ recvTime: -1 })
      .limit(limitDefault);

    return res.json(findValues);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};
