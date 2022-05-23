import User from '../../../models/User';

export default async (req, res) => {
    try {
        const usrRmv = await User.deleteOne({ _id: await req.params.id.toString() });
        
        return res.status(204).json(usrRmv);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
