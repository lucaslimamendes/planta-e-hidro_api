import { createSecretKey } from 'crypto';
import { jwtVerify } from 'jose';

const authorization = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const [type, token] = authHeader && authHeader.split(' ') || [];
        
        if (!token || type !== 'Bearer')
            return res.status(401).json({ error: 'unauthorized, token required!' });
    
        const key = createSecretKey(process.env.SECRET_JWT, 'utf-8');
        const { payload } = await jwtVerify(token, key);

        req.userId = await payload.usrId;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'token invalid!' });
    }
}

export default authorization;
