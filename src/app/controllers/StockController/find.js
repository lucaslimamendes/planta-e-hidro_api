import stock from '../../../mock/Stock';

export default async (req, res) => {
    const itemStock = stock.find((s) => s.id == req.params.id);

    return itemStock 
        ? res.json(itemStock) 
        : res.status(404).json({ error: 'Stock item not found!' });
};
