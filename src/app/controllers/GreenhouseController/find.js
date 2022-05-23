import Greenhouse from '../../models/Greenhouse';

export default async (req, res) => {
    try {
        const findGreen = await Greenhouse.findOne({ _id: await req.params.id.toString() });
    
        return res.json(findGreen);
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }
};
