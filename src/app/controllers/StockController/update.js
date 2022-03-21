import stock from '../../../../mock/Stock';

export default async (req, res) => {

    const item = stock.find((s) => s.id == req.params.id);

    if(!item)
        return res.status(404).json({ error: 'Item on stock not found!' });

    const { description, quantity, quantity_type, value, type } = req.body;

    item.description = description ? description : item.description;
    item.quantity = quantity ? quantity : item.quantity;
    item.quantity_type = quantity_type ? quantity_type : item.quantity_type;
    item.value = value ? value : item.value;
    item.type = type ? type : item.type;

    return res.json(item);
};
