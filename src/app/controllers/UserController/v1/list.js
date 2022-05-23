import User from '../../../models/User';

export default async (req, res) => {
    try {
        const users = await User.find({}, '-password');
    
        return res.json(users);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
