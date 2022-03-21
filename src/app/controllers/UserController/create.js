import bcrypt from 'bcryptjs';

export default async (req, res) => {
    const { name, email, phone, password } = req.body;
    
    if(!name || !email || !phone || !password)
        return res.status(400).json({ error: 'Missing required fields!' });

    const user = {
        id: Math.floor(Math.random() * 500) + 1,
        name,
        password: await bcrypt.hash(password, 10),
        email,
        phone,
        type: 'Colab'
    };
    return res.status(201).json(user);
};
