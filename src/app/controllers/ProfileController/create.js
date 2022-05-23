import { Validator } from 'jsonschema';
import Profile from '../../models/Profile';
import profileSchema from '../../schemas/Profile';

export default async (req, res) => {
    try {
        const v = new Validator();
        const resValidate = v.validate(await req.body, profileSchema);
    
        if (!resValidate.valid) {
            return res.status(412).json({ error: resValidate.toString() });
        }

        const { description } = await req.body;

        const newProfile = await new Profile({
            description, lastModified: new Date().toISOString()
        });
        await newProfile.save();

        return res.status(201).json({ profileId: newProfile._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
