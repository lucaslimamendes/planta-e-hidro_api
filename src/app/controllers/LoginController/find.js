import { createSecretKey } from 'crypto';
import { SignJWT } from 'jose';
import bcrypt from 'bcryptjs';
import User from '../../models/User';

export default async (req, res) => {
  try {
    const { email, password } = await req.body;

    const findUser = await User.findOne({ email: email });
    if (!findUser) return res.status(404).json({ error: 'User not found!' });

    const match = await bcrypt.compare(password.toString(), findUser.password);
    if (!match)
      return res
        .status(412)
        .json({ message: 'Senha e/ou email incorreto(s)!' });

    const secretKey = createSecretKey(process.env.SECRET_JWT, 'utf-8');
    const tokenJWT = await new SignJWT({ usrId: await findUser._id })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime(process.env.EXPIRE_JWT)
      .sign(secretKey);

    return res.status(200).json({
      userId: await findUser._id,
      userName: await findUser.name,
      token: tokenJWT,
    });
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
