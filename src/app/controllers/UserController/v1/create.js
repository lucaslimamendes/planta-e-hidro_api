import bcrypt from 'bcryptjs';
import { Validator } from 'jsonschema';
import User from '../../../models/User';
import userSchema from '../../../schemas/User.json';

export default async (req, res) => {
    try {
        const v = new Validator();
        const resValidate = v.validate(await req.body, userSchema);
    
        if (!resValidate.valid) {
            return res.status(412).json({ error: resValidate.toString() });
        }

        const password = await bcrypt.hash(await req.body.password, 10); 
        const {
            name, email, phone, address, city, state, country
        } = await req.body;

        const user = await new User({
            name, email, password, phone, address, city, state, country, lastModified: new Date().toISOString()
        });
        await user.save();

        return res.status(201).json({ userId: user._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
