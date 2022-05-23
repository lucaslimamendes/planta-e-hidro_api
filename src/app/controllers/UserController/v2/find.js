import User from '../../../models/User';

export default async (req, res) => {
    try {
        const findUsr = await User.findOne({ _id: await req.userId.toString() }, '_id name');
        const authHeader = req.headers['authorization'];
        const [type, token] = authHeader && authHeader.split(' ') || [];
    
        return res.json({ userId: await findUsr._id, userName: await findUsr.name, token: token });
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }
};
