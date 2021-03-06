import Greenhouse from '../../models/Greenhouse';

export default async (req, res) => {
    try {
        const findGreen = await Greenhouse.find({ userId: await req.userId.toString() });
    
        return res.json(findGreen);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
