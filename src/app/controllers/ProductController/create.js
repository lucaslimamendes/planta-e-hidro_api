import { Validator } from 'jsonschema';
import Product from '../../models/Product';
import productSchema from '../../schemas/Product';

export default async (req, res) => {
    try {
        const v = new Validator();
        const resValidate = v.validate(await req.body, productSchema);
    
        if (!resValidate.valid) {
            return res.status(412).json({ error: resValidate.toString() });
        }

        const { greenhouseId, name, description, quantity } = await req.body;

        const newPdt = await new Product({
            greenhouseId, name, description, quantity, lastModified: new Date().toISOString()
        });
        await newPdt.save();

        return res.status(201).json({ productId: newPdt._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
