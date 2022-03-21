import users from '../../../../mock/Users';

export default async (req, res) => {
    const user = users.find((usr) => usr.id == req.params.id);
    if(!user)
        return res.status(404).json({ error: 'User not found!' });

    const { name, email, phone } = req.body;

    user.name = name ? name : user.name;
    user.email = email ? email : user.email;
    user.phone = phone ? phone : user.phone;

    return res.json(user);
};
