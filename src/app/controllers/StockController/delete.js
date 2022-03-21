import stock from '../../../../mock/Stock';

export default async (req, res) => {
    const itemStock = stock.findIndex((s) => s.id == req.params.id);

    if(!itemStock || itemStock < 0)
        return res.status(404).json({ error: 'Stock item not found!' });

    stock.splice(itemStock, 1);
    return res.json(stock);
};
