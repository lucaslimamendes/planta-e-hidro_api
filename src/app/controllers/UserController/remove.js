import users from '../../../../mock/Users';

export default async (req, res) => {
    const userIdx = users.findIndex((usr) => usr.id == req.params.id);
    if(!userIdx || userIdx < 0)
        return res.status(404).json({ error: 'User not found!' });

    users.splice(userIdx, 1);
    return res.json(users);
};
