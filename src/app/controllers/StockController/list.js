import stock from '../../../mock/Stock';

export default async (req, res) => {
    return res.json(stock);
};
