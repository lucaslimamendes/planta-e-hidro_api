import Sensor from '../../models/Sensor';

export default async (req, res) => {
    try {
        const { description, unit, value, max, min } = await req.body;
    
        const updtSensor = await Sensor.findOne({ _id: await req.params.id.toString() });
  
        if(!req.params.id || !updtSensor)
            return res.status(404).json({ error: 'Sensor not found!' });
  
        updtSensor.description = description || updtSensor.description;
        updtSensor.unit = unit || updtSensor.unit;
        updtSensor.value = value || updtSensor.value;
        updtSensor.max = max || updtSensor.max;
        updtSensor.min = min || updtSensor.min;
        updtSensor.lastModified = new Date().toISOString();
  
        await updtSensor.save();
  
        return res.json({ sensorId: updtSensor._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
