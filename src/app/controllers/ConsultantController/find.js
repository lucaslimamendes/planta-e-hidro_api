import Consultant from '../../models/Consultant';

export default async (req, res) => {
    try {
        const findConsult = await Consultant.findOne({ _id: await req.params.id.toString() });
    
        return res.json(findConsult);
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }
};
