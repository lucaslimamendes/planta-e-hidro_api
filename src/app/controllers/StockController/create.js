import stock from '../../../mock/Stock';

export default async (req, res) => {

    const { description, quantity, quantity_type, value, type } = req.body;
    
    if(!description)
        return res.status(400).json({ error: 'A descrição do produto é obrigatória!' });

    if(!value || !type)
        return res.status(400).json({ error: 'Missing required fields!' + description });

    const item = {
        id: Math.floor(Math.random() * 500) + 1,
        description,
        quantity,
        quantity_type,
        value,
        type
    };

    stock.push(item);
    return res.status(201).json(item);
};
