import bcrypt from 'bcryptjs';
import users from '../../../../mock/Users';

export default async (req, res) => {
    const { name, email, phone, password, username } = req.body;
    
    if(!name || !email || !phone || !password || !username)
        return res.status(400).json({ error: 'Missing required fields!' });

    const user = {
        id: Math.floor(Math.random() * 500) + 1,
        username,
        password: await bcrypt.hash(password, 10),
        name,
        email,
        phone,
        type: 'Colab'
    };

    // user.push(users);
    return res.status(201).json(user);
};
