import Profile from '../../models/Profile';

export default async (req, res) => {
    try {
        const profiles = await Profile.find();
    
        return res.json(profiles);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
