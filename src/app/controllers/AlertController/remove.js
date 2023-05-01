import Alert from '../../models/Alert';

export default async (req, res) => {
  try {
    // TO DO (DELETE SUBSCRIPTION SERVICE - fiwareSubscriptionId)

    const alertRmv = await Alert.deleteOne({
      _id: await req.params.id.toString(),
    });

    return res.status(204).json(alertRmv);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
