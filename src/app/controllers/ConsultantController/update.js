import Consultant from '../../models/Consultant';

export default async (req, res) => {
  try {
      const { specialty, carrerResume } = await req.body;
  
      const updtConst = await Consultant.findOne({ _id: await req.params.id.toString(), userId: await req.userId.toString() });

      if(!req.params.id || !updtConst)
          return res.status(404).json({ error: 'Consultant not found!' });

      updtConst.specialty = specialty || updtConst.specialty;
      updtConst.carrerResume = carrerResume || updtConst.carrerResume;
      updtConst.lastModified = new Date().toISOString();

      await updtConst.save();

      return res.json({ consultantId: updtConst._id });
  } catch (error) {
      return res.status(500).json({ error: error.toString() });
  }
};
