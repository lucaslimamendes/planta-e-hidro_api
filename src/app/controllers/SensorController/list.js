import Sensor from '../../models/Sensor';

export default async (req, res) => {
    try {
        const findSensor = await Sensor.find({ greenhouseId: await req.params.greenhouseId.toString() });
    
        return res.json(findSensor);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
