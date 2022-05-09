import users from '../../../../mock/Users';

export default async (req, res) => {

    users.forEach(user => {
        delete user['password'];
        delete user['phone'];
        delete user['name'];
    });

    return res.json(users);
};
