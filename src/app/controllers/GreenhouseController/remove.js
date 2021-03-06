import Greenhouse from '../../models/Greenhouse';

export default async (req, res) => {
    try {
        const rmv = await Greenhouse.deleteOne({ _id: await req.params.id.toString(), userId: await req.userId.toString() });
        
        return res.status(204).json(rmv);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
