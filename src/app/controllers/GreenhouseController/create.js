import { Validator } from 'jsonschema';
import Greenhouse from '../../models/Greenhouse';
import greenhouseSchema from '../../schemas/Greenhouse';

export default async (req, res) => {
    try {
        const v = new Validator();
        const resValidate = v.validate(await req.body, greenhouseSchema);
    
        if (!resValidate.valid) {
            return res.status(412).json({ error: resValidate.toString() });
        }

        const { userId, name, channelQty, address } = await req.body;

        const newGreen = await new Greenhouse({
            userId, name, channelQty, address, lastModified: new Date().toISOString()
        });
        await newGreen.save();

        return res.status(201).json({ greenhouseId: newGreen._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
