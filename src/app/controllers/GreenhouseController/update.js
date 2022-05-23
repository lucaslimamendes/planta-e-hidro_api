import Greenhouse from '../../models/Greenhouse';

export default async (req, res) => {
  try {
      const { name, channelQty, address } = await req.body;
  
      const updtGreen = await Greenhouse.findOne({ _id: await req.params.id.toString(), userId: await req.userId.toString() });

      if(!req.params.id || !updtGreen)
          return res.status(404).json({ error: 'Greenhouse not found!' });

      updtGreen.name = name || updtGreen.name;
      updtGreen.channelQty = channelQty || updtGreen.channelQty;
      updtGreen.address = address || updtGreen.address;
      updtGreen.lastModified = new Date().toISOString();

      await updtGreen.save();

      return res.json({ greenhouseId: updtGreen._id });
  } catch (error) {
      return res.status(500).json({ error: error.toString() });
  }
};
