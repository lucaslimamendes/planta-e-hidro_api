import bcrypt from 'bcryptjs';
import { Validator } from 'jsonschema';
import User from '../../../models/User';
import Profile from '../../../models/Profile';
import UserProfile from '../../../models/UserProfile';
import userAdminSchema from '../../../schemas/UserAdmin';

export default async (req, res) => {
    try {
        const v = new Validator();
        const resValidate = v.validate(await req.body, userAdminSchema);
    
        if (!resValidate.valid) {
            return res.status(412).json({ error: resValidate.toString() });
        }

        const password = await bcrypt.hash(await req.body.password, 10); 
        const {
            name, email, phone, address, city, state, country, profileName
        } = await req.body;

        const profileUsr = await Profile.findOne({ description: profileName });

        const newUser = await new User({
            name, email, password, phone, address, city, state, country, lastModified: new Date().toISOString()
        });
        await newUser.save();

        const newUserProfile = await new UserProfile({
            userId: newUser._id, profileId: profileUsr._id, lastModified: new Date().toISOString()
        });
        await newUserProfile.save();

        return res.status(201).json({ userId: newUser._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
