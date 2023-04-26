import User from '../../models/User';

export default async (req, res) => {
  try {
    const findUsr = await User.findOne(
      { _id: await req.params.id.toString() },
      '-password'
    );

    return res.json(findUsr);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};
