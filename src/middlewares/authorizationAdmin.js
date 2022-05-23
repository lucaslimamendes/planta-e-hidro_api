const authorizationAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const [type, token] = authHeader && authHeader.split(' ') || [];
        
        if (!token || type !== 'Bearer' || token != process.env.ADMIN_TOKEN )
            return res.status(401).json({ error: 'unauthorized, token required!' });

        next();
    } catch (error) {
        return res.status(403).json({ error: 'token invalid!' });
    }
}

export default authorizationAdmin;
