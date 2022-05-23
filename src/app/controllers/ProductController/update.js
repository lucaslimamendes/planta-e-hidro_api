import Product from '../../models/Product';

export default async (req, res) => {
    try {
        const { name, description, quantity } = await req.body;
    
        const updtPdt = await Product.findOne({ _id: await req.params.id.toString() });
  
        if(!req.params.id || !updtPdt)
            return res.status(404).json({ error: 'Product not found!' });
  
        updtPdt.name = name || updtPdt.name;
        updtPdt.description = description || updtPdt.description;
        updtPdt.quantity = quantity || updtPdt.quantity;
        updtPdt.lastModified = new Date().toISOString();
  
        await updtPdt.save();
  
        return res.json({ productId: updtPdt._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
