import Alert from '../../models/Alert';

export default async (req, res) => {
  try {
    const alerts = await Alert.find();

    return res.json(alerts);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
