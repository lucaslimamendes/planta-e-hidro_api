import Consultant from '../../models/Consultant';

export default async (req, res) => {
    try {
        const findGreen = await Consultant.find({ userId: await req.userId.toString() });
    
        return res.json(findGreen);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
