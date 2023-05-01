import Alert from '../../models/Alert';
import { deleteSubscription } from '../../services/subscriptions';

export default async (req, res) => {
  try {
    const alert = await Alert.findOne({
      _id: await req.params.id.toString(),
    });

    if (!alert) {
      return res.status(400).json({ error: 'Alert not found!' });
    }

    await deleteSubscription(alert.fiwareSubscriptionId);

    const alertRmv = await Alert.deleteOne({
      _id: await req.params.id.toString(),
    });

    return res.status(204).json(alertRmv);
  } catch (error) {
    return res.status(500).json({ error: error.toString() });
  }
};
