import users from '../../../../mock/Users';

export default async (req, res) => {

    const { username, password } = req.body;

    const user = users.find((usr) => usr.username == username);

    if (!user)
        return res.status(404).json({ Error: 'User not found!' });

    if (password == user.password)
        return res.status(200).json({ Mensage: 'Logado!' });
    else
        return res.status(200).json({ Mensage: 'Senha do usuário incorreta!' });
};
