import users from '../../../../mock/Users';

export default async (req, res) => {
    const user = users.find((usr) => usr.id == req.params.id);

    if(!user)
        res.status(404).json({ error: 'User not found!' });

    const { id, type } = user;
    return res.json({ id, type });
};
