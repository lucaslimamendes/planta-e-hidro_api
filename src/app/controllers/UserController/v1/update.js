import bcrypt from 'bcryptjs';
import users from '../../../../../mock/Users';

export default async (req, res) => {
    const user = users.find((usr) => usr.id == req.params.id);
    if(!user)
        return res.status(404).json({ error: 'User not found!' });

    const { name, email, phone, password } = req.body;

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.phone = phone ? phone : user.phone;

    if(password)
        user.password = await bcrypt.hash(password, 10);

    return res.json(user);
};
