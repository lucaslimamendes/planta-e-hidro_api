import greenhouses from '../../../mock/Greenhouses';

export default async (req, res) => {
  const greenhouse = greenhouses.find(grnh => grnh.id == req.params.id);
  if (!greenhouse)
    return res.status(404).json({ error: 'Greenhouse not found!' });

  const { tubes, address, width, length } = req.body;

  greenhouse.tubes = tubes ? tubes : greenhouse.tubes;
  greenhouse.address = address ? address : greenhouse.address;
  greenhouse.width = width ? width : greenhouse.width;
  greenhouse.length = length ? length : greenhouse.length;

  return res.json(greenhouse);
};
