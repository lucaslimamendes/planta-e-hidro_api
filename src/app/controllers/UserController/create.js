export default async (req, res) => {
    const { name, email, phone } = req.body;
    
    if(!name || !email || !phone)
        return res.status(400).json({ error: 'Missing required fields!' });

    const user = {
        id: Math.floor(Math.random() * 500) + 1,
        name,
        email,
        phone,
        type: 'Colab'
    };
    return res.status(201).json(user);
};
