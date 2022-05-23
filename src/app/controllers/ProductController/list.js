import Product from '../../models/Product';

export default async (req, res) => {
    try {
        const findPdt = await Product.find({ greenhouseId: await req.params.greenhouseId.toString() });
    
        return res.json(findPdt);
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
