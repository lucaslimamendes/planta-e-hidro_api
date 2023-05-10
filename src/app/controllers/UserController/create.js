import bcrypt from 'bcryptjs';
import { Validator } from 'jsonschema';
import User from '../../models/User';
import userSchema from '../../schemas/User';

export default async (req, res) => {
  try {
    const v = new Validator();
    const resValidate = v.validate(await req.body, userSchema);

    if (!resValidate.valid) {
      return res.status(412).json({ error: resValidate.toString() });
    }

    const password = await bcrypt.hash(await req.body.password, 10);
    const { name, email, isActive = true, notifyToken = '' } = await req.body;
    const dtNow = new Date().toISOString();

    const newUser = await new User({
      name,
      email,
      password,
      isActive,
      notifyToken,
      lastModified: dtNow,
      createdAt: dtNow,
    });
    await newUser.save();

    return res.status(201).json({ userId: newUser._id });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
