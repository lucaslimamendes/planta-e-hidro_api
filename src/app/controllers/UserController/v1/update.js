import bcrypt from 'bcryptjs';
import User from '../../../models/User';

export default async (req, res) => {
    try {
        const { name, email, password, phone, address, city, state, country } = await req.body;
        let newPass;
    
        if(password)
            newPass = await bcrypt.hash(password, 10);
    
        const updtUser = await User.findOne({ _id: req.userId });

        if(!req.params.id || req.userId != req.params.id || !updtUser)
            return res.status(404).json({ error: 'User not found!' });

        updtUser.name = name || updtUser.name;
        updtUser.email = email || updtUser.email;
        updtUser.password = newPass || updtUser.password;
        updtUser.phone = phone || updtUser.phone;
        updtUser.address = address || updtUser.address;
        updtUser.city = city || updtUser.city;
        updtUser.state = state || updtUser.state;
        updtUser.country = country || updtUser.country;
        updtUser.lastModified = new Date().toISOString();

        await updtUser.save();

        return res.json({ userId: updtUser._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
