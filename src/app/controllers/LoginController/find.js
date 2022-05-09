import { createSecretKey } from 'crypto';
import { SignJWT } from 'jose';
import bcrypt from 'bcryptjs';
import settings from '../../../config/auth';
import users from '../../../../mock/Users';

export default async (req, res) => {
    try {
        const { email, password } = req.body;
    
        const user = users.find((usr) => usr.email == email);
        if (!user)
            return res.status(404).json({ error: 'User not found!' });
    
        const match = await bcrypt.compare(password.toString(), user.password);
        if (!match)
            return res.status(412).json({ message: 'Senha e/ou email incorreto(s)!' });

        const secretKey = createSecretKey(settings.secret, 'utf-8');
        const tokenJWT = await new SignJWT({ 'usrId': user.id })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime(settings.expiresIn)
            .sign(secretKey);
        
        return res.status(200).json({ id: user.id, token: tokenJWT });
    } catch (error) {
        console.log('error', error);
        return res.status(500).json({ error: 'Internal error!' });
    }
};
