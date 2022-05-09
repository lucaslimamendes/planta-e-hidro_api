import users from '../../../../../mock/Users';

export default async (req, res) => {
    const user = users.find((usr) => usr.id == req.params.id);

    return user 
        ? res.json(user) 
        : res.status(404).json({ error: 'User not found!' });
};
