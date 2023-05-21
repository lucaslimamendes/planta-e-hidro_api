import Alert from '../../models/Alert';

export default async (req, res) => {
  try {
    const findAlert = await Alert.find({
      userId: await req.params.userId.toString(),
    }).sort({ createdAt: -1 });

    return res.json(findAlert);
  } catch (error) {
    return res.status(400).json({ error: error.toString() });
  }
};
