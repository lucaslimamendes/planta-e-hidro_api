import Sensor from '../../models/Sensor';

export default async (req, res) => {
    try {
        const rmv = await Sensor.deleteOne({ _id: await req.params.id.toString() });
        
        return res.status(204).json(rmv);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
