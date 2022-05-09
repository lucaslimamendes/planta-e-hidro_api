import { createSecretKey } from 'crypto';
import { jwtVerify } from 'jose';
import settings from '../config/auth';

const authorization = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const [type, token] = authHeader && authHeader.split(' ') || [];
        
        if (!token || type !== 'Bearer')
            return res.status(401).json({ error: 'unauthorized, token required!' });
    
        const key = createSecretKey(settings.secret, 'utf-8');
        const { payload } = await jwtVerify(token, key);

        req.userId = payload.usrId;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'token invalid!' });
    }
}

export default authorization;
