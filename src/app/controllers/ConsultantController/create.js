import { Validator } from 'jsonschema';
import Consultant from '../../models/Consultant';
import consultantSchema from '../../schemas/Consultant';

export default async (req, res) => {
    try {
        const v = new Validator();
        const resValidate = v.validate(await req.body, consultantSchema);
    
        if (!resValidate.valid) {
            return res.status(412).json({ error: resValidate.toString() });
        }

        const { userId, specialty, carrerResume } = await req.body;

        const newConsult = await new Consultant({
            userId, specialty, carrerResume, lastModified: new Date().toISOString()
        });
        await newConsult.save();

        return res.status(201).json({ consultantId: newConsult._id });
    } catch (error) {
        return res.status(500).json({ error: error.toString() });
    }
};
