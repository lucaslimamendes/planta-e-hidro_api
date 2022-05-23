import Product from '../../models/Product';

export default async (req, res) => {
    try {
        const findPdt = await Product.findOne({ _id: await req.params.id.toString() });
    
        return res.json(findPdt);
    } catch (error) {
        return res.status(400).json({ error: error.toString() });
    }
};
